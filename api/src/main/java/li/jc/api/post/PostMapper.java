package li.jc.api.post;

import li.jc.api.post.dao.PostDetails;
import li.jc.api.post.dao.PostResponse;
import li.jc.api.post.dao.PostResponseNoTopics;
import li.jc.api.topic.TopicMapper;
import li.jc.api.topic.dao.TopicResponseNoPosts;

import java.time.Instant;
import java.util.Set;
import java.util.stream.Collectors;

public class PostMapper {

    private PostMapper() {}

    public static Post convertToJPAEntity(final PostDetails postDetails) {
        return new Post(
                postDetails.getTitle(),
                postDetails.getContent(),
                Instant.now()
        );
    }

    public static PostResponse convertToSerializableDAO(final Post post) {
        Set<TopicResponseNoPosts> topics = post.getTopics()
                .stream()
                .map(TopicMapper::convertToShallowSerializableDAO)
                .collect(Collectors.toSet());

        return new PostResponse(
                post.getId(),
                post.getTitle(),
                post.getContent(),
                post.getCreated(),
                topics
        );
    }

    public static PostResponseNoTopics convertToShallowSerializableDAO(final Post post) {
        return new PostResponseNoTopics(
                post.getId(),
                post.getTitle(),
                post.getContent(),
                post.getCreated()
        );
    }
}
