package li.jc.api.post.dao;

import li.jc.api.topic.dao.TopicResponseNoPosts;
import lombok.AllArgsConstructor;
import lombok.Getter;
import java.time.Instant;
import java.util.Set;

/**
 * Object representing a JSON-serializable server response.
 */
@Getter
@AllArgsConstructor
public class PostResponse {
    private final Integer id;
    private final String title;
    private final String content;
    private final Instant created;
    private Set<TopicResponseNoPosts> topics;

    public PostResponse(final Integer id, final String title, final String content, final Instant created) {
        this.id = id;
        this.title = title;
        this.content= content;
        this.created = created;
    }
}
