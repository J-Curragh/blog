package li.jc.api.post;

import li.jc.api.post.dao.PostDetails;
import li.jc.api.post.dao.PostResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping(value = "/api/v1/posts", produces = MediaType.APPLICATION_JSON_VALUE)
public class PostController {

    private final PostRepository postRepository;

    PostController(final PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Post not found")
    private static class PostNotFoundException extends RuntimeException {
        PostNotFoundException(String s) {
            super("POST NOT FOUND --> " + s);
        }
    }

    @ResponseStatus(code = HttpStatus.CONFLICT, reason = "Post already exists")
    private static class PostAlreadyExistsException extends RuntimeException {
        PostAlreadyExistsException(String s) { super ("POST ALREADY EXISTS --> " + s); }
    }

    @GetMapping
    List<PostResponse> getAllPosts() {

        List<Post> posts = postRepository.findAll();

        return posts.stream()
                .map(PostMapper::convertToSerializableDAO)
                .collect(Collectors.toList());

    }

    @GetMapping("/{id}")
    PostResponse getPost(@PathVariable final int id) {
        Post post = this.postRepository.getPostById(id).orElseThrow(
                () -> new PostNotFoundException("Post with ID " + id + " does not exist.")
        );

        return PostMapper.convertToSerializableDAO(post);
    }

    @ResponseStatus
    @PostMapping
    PostResponse createPost(@RequestBody final PostDetails postDetails) {
        if (postRepository.existsPostByTitle(postDetails.getTitle())) {
            throw new PostAlreadyExistsException("Post with title " + postDetails.getTitle() + " already exists.");
        }

        Post post = PostMapper.convertToJPAEntity(postDetails);
        this.postRepository.save(post);

        return PostMapper.convertToSerializableDAO(post);
    }

}