package li.jc.api.post;

import li.jc.api.post.dao.PostDetails;
import li.jc.api.post.dao.PostResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping(value = "/api/v1/posts", produces = MediaType.APPLICATION_JSON_VALUE)
public class PostController {

    private final PostService postService;

    PostController(final PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    List<PostResponse> getAllPosts() {
        return postService.getAllPosts();

    }

    @ResponseStatus
    @GetMapping("/{id}")
    PostResponse getPost(@PathVariable final int id) {
        return postService.getSinglePostByID(id);
    }

    @ResponseStatus
    @PostMapping
    PostResponse createPost(@RequestBody final PostDetails postDetails) {
        return postService.createSinglePost(postDetails);
    }

    @DeleteMapping("/{id}")
    PostResponse deletePost(@PathVariable final int id) {
        return postService.deleteSinglePost(id);
    }


}