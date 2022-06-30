package li.jc.api.post;

import li.jc.api.post.dao.PostDetails;
import li.jc.api.post.dao.PostResponse;
import li.jc.api.post.exceptions.PostAlreadyExistsException;
import li.jc.api.post.exceptions.PostNotFoundException;
import li.jc.api.topic.Topic;
import li.jc.api.topic.TopicRepository;
import li.jc.api.topic.exceptions.TopicNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class PostService {

    private final PostRepository postRepository;
    private final TopicRepository topicRepository;

    public PostService(final PostRepository postRepository, final TopicRepository topicRepository) {
        this.postRepository = postRepository;
        this.topicRepository = topicRepository;
    }

    PostResponse createSinglePost(PostDetails postDetails) {
        if (postRepository.existsPostByTitle(postDetails.getTitle())) {
            throw new PostAlreadyExistsException("Post with title " + postDetails.getTitle() + " already exists.");
        }

        List<Integer> topicIDs = postDetails.getTopics();

        Set<Topic> topics = new HashSet<>();
        for (Integer topicID : topicIDs) {
            Topic topic = topicRepository.findTopicById(topicID).orElseThrow(
                    () -> new TopicNotFoundException("Topic with ID " + topicID + " does not exist.")
            );
            topics.add(topic);
        }

        Post post = new Post(
                postDetails.getTitle(),
                postDetails.getContent(),
                Instant.now(),
                topics
        );

        postRepository.save(post);

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

    public List<PostResponse> getRecentPosts() {
        final int DEFAULT_SIZE_RECENT = 4;

        final PageRequest pageReq = PageRequest.of(
                0, DEFAULT_SIZE_RECENT, Sort.by("created").descending()
        );
        final Page<Post> posts = postRepository.findAll(pageReq);

        return posts.stream()
                .map(PostMapper::convertToSerializableDAO)
                .collect(Collectors.toList());
    }

    public PostResponse deleteSinglePost(final int id) {
        Post post = postRepository.getPostById(id).orElseThrow(
                () -> new PostNotFoundException("Post with ID " + id + " not found.")
        );

        postRepository.delete(post);

        return PostMapper.convertToSerializableDAO(post);
    }
}
