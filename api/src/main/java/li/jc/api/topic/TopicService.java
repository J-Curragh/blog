package li.jc.api.topic;

import li.jc.api.topic.dao.TopicDetails;
import li.jc.api.topic.dao.TopicResponse;
import li.jc.api.topic.exceptions.TopicAlreadyExistsException;
import li.jc.api.topic.exceptions.TopicNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
class TopicService {

    private final TopicRepository topicRepository;

    TopicService(final TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    public List<TopicResponse> getAllTopics() {
        final List<Topic> topics = topicRepository.findAll();

        return topics.stream().map(TopicMapper::convertToSerializableDAO).collect(Collectors.toList());
    }

    public TopicResponse getSingleTopic(int id) {
        Topic topic = topicRepository.findTopicById(id)
                .orElseThrow(() -> new TopicNotFoundException("Topic with id " + id + "does not exist."));

        return TopicMapper.convertToSerializableDAO(topic);
    }

    public TopicResponse createSingleTopic(TopicDetails topicDetails) {
        if (topicRepository.existsTopicByName(topicDetails.getName())) {
            throw new TopicAlreadyExistsException("Topic with name '" + topicDetails.getName() + "' already exists.");
        }

        Topic topic = TopicMapper.convertToJPAEntity(topicDetails);
        this.topicRepository.save(topic);

        return TopicMapper.convertToSerializableDAO(topic);
    }
}
