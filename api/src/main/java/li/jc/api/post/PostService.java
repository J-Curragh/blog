package li.jc.api.post;

import li.jc.api.post.dao.PostDetails;
import li.jc.api.post.dao.PostResponse;
import li.jc.api.post.exceptions.PostAlreadyExistsException;
import li.jc.api.post.exceptions.PostNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(final PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    PostResponse createSinglePost(PostDetails postDetails) {
        if (postRepository.existsPostByTitle(postDetails.getTitle())) {
            throw new PostAlreadyExistsException("Post with title " + postDetails.getTitle() + " already exists.");
        }

        Post post = PostMapper.convertToJPAEntity(postDetails);
        this.postRepository.save(post);

        return PostMapper.convertToSerializableDAO(post);
    }

    public PostResponse getSinglePostByID(int id) {
        Post post = this.postRepository.getPostById(id).orElseThrow(
                () -> new PostNotFoundException("Post with ID " + id + " does not exist.")
        );

        return PostMapper.convertToSerializableDAO(post);
    }

    public List<PostResponse> getAllPosts() {
        List<Post> posts = postRepository.findAll();

        return posts.stream()
                .map(PostMapper::convertToSerializableDAO)
                .collect(Collectors.toList());
    }
}
