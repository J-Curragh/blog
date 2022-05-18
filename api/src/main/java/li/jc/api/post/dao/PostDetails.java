package li.jc.api.post.dao;

import li.jc.api.topic.dao.TopicDetails;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

/**
 * Object representing a JSON payload for the API when creating a new post.
 */
@Getter
@AllArgsConstructor
public class PostDetails {
    private final String title;
    private final String content;
    private List<TopicDetails> topics;
}
