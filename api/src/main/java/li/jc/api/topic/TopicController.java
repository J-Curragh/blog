package li.jc.api.topic;

import li.jc.api.topic.dao.TopicDetails;
import li.jc.api.topic.dao.TopicResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@RequestMapping(value = "/api/v1/topics", produces = MediaType.APPLICATION_JSON_VALUE)
class TopicController {
    private final TopicService topicService;

    TopicController(final TopicService topicService) {
        this.topicService = topicService;
    }

    @GetMapping
    List<TopicResponse> getAllTopics() {
        return topicService.getAllTopics();
    }

    @GetMapping("/{id}")
    TopicResponse getTopic(@PathVariable final int id) {
        return topicService.getSingleTopic(id);
    }

    @ResponseStatus
    @PostMapping
    TopicResponse createTopic(@RequestBody final TopicDetails topicDetails) {
        return topicService.createSingleTopic(topicDetails);
    }
}
