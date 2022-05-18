package li.jc.api.post.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.time.Instant;

/**
 * Object representing a JSON-serializable server response.
 */
@Getter
@AllArgsConstructor
public class PostResponseNoTopics {
    private final Integer id;
    private final String title;
    private final String content;
    private final Instant created;
}
