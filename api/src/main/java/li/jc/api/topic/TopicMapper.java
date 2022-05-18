package li.jc.api.topic;

import li.jc.api.post.PostMapper;
import li.jc.api.post.dao.PostResponseNoTopics;
import li.jc.api.topic.dao.TopicDetails;
import li.jc.api.topic.dao.TopicResponse;
import li.jc.api.topic.dao.TopicResponseNoPosts;

import java.util.List;
import java.util.stream.Collectors;

public class TopicMapper {

    private TopicMapper() {}

    public static Topic convertToJPAEntity(final TopicDetails topicDetails) {
        return new Topic(
                topicDetails.getName()
        );
    }

    public static TopicResponse convertToSerializableDAO(final Topic topic) {
        List<PostResponseNoTopics> posts = topic.getPosts()
                .stream()
                .map(PostMapper::convertToShallowSerializableDAO)
                .collect(Collectors.toList());
        return new TopicResponse(
                topic.getId(),
                topic.getName(),
                posts
        );
    }

    public static TopicResponseNoPosts convertToShallowSerializableDAO(final Topic topic) {
        return new TopicResponseNoPosts(
                topic.getId(),
                topic.getName()
        );
    }
}
