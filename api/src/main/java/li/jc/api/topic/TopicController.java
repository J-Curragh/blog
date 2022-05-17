package li.jc.api.topic;

import org.hibernate.NonUniqueResultException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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
        final List<TopicResponse> topicResponses = new ArrayList<>();
        final List<Topic> topics = topicRepository.findAll();

        topics.forEach(topic -> topicResponses.add(new TopicResponse(topic)));

        return topicResponses;
    }

    @GetMapping("/{id}")
    TopicResponse getTopic(@PathVariable final int id) {
        Topic topic = topicRepository.findTopicById(id)
                .orElseThrow(() -> new TopicNotFoundException("Topic with id " + id + "does not exist."));

        return new TopicResponse(topic);
    }

    @ResponseStatus
    @PostMapping
    TopicResponse createTopic(@RequestBody final TopicDetails topicDetails) {
        if (topicRepository.existsTopicByName(topicDetails.getName())) {
            throw new TopicAlreadyExistsException("Topic with name '" + topicDetails.getName() + "' already exists.");
        }

        Topic topic = new Topic(topicDetails.getName());
        this.topicRepository.save(topic);
        return new TopicResponse(topic);
    }


}
