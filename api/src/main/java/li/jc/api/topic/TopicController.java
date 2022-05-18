package li.jc.api.topic;

import li.jc.api.topic.dao.TopicDetails;
import li.jc.api.topic.dao.TopicResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping(value = "/api/v1/topics", produces = MediaType.APPLICATION_JSON_VALUE)
class TopicController {
    private final TopicRepository topicRepository;

    TopicController(final TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }
    @ResponseStatus(code = HttpStatus.NOT_FOUND)
    private static class TopicNotFoundException extends RuntimeException {
        TopicNotFoundException(final String s) {
            super("TOPIC NOT FOUND --> " + s);
        }
    }

    @ResponseStatus(code = HttpStatus.CONFLICT)
    private static class TopicAlreadyExistsException extends RuntimeException {
        TopicAlreadyExistsException(final String s) { super("TOPIC ALREADY EXISTS --> " + s); }
    }

    @GetMapping
    List<TopicResponse> getAllTopics() {
        final List<Topic> topics = topicRepository.findAll();

        return topics.stream().map(TopicMapper::convertToSerializableDAO).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    TopicResponse getTopic(@PathVariable final int id) {
        Topic topic = topicRepository.findTopicById(id)
                .orElseThrow(() -> new TopicNotFoundException("Topic with id " + id + "does not exist."));

        return TopicMapper.convertToSerializableDAO(topic);
    }

    @ResponseStatus
    @PostMapping
    TopicResponse createTopic(@RequestBody final TopicDetails topicDetails) {
        if (topicRepository.existsTopicByName(topicDetails.getName())) {
            throw new TopicAlreadyExistsException("Topic with name '" + topicDetails.getName() + "' already exists.");
        }

        Topic topic = TopicMapper.convertToJPAEntity(topicDetails);
        this.topicRepository.save(topic);

        return TopicMapper.convertToSerializableDAO(topic);
    }


}
