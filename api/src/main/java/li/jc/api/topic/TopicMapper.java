package li.jc.api.topic;

import li.jc.api.post.PostMapper;
import li.jc.api.post.dao.PostResponseNoTopics;
import li.jc.api.topic.dao.TopicDetails;
import li.jc.api.topic.dao.TopicResponse;
import li.jc.api.topic.dao.TopicResponseNoPosts;
import li.jc.api.topic.exceptions.TopicNotFoundException;

import java.util.List;
import java.util.stream.Collectors;

public class TopicMapper {

    private TopicMapper() {}

    public static Topic convertToJPAEntity(final TopicRepository topicRepository, final TopicDetails topicDetails) {
        String topicName = topicDetails.getName();
        if (Boolean.FALSE.equals(topicRepository.existsTopicByName(topicName))){
            throw new TopicNotFoundException("Topic with name " + topicName + " does not exist.");
        }

        return new Topic(topicName);
    }

    public static Topic convertToJPAEntity(final TopicDetails topicDetails) {
        return new Topic(topicDetails.getName());
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
