package li.jc.api.post;

import lombok.Getter;

/**
 * Object representing a JSON payload for the API when creating a new post.
 */
@Getter
public class PostDetails {
    private String title;
    private String content;
}
