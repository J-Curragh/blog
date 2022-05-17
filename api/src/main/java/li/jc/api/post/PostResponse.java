package li.jc.api.post;


import lombok.Getter;

import java.time.Instant;

/**
 * Object representing a JSON-serializable server response.
 */
@Getter
public class PostResponse {
    private final Integer id;
    private final String title;
    private final String content;
    private final Instant created;

    public PostResponse(final Post post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.created = Instant.now();
    }
}
