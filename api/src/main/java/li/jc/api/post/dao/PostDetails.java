package li.jc.api.post.dao;

import lombok.Getter;

import java.io.Serializable;

/**
 * Object representing a JSON payload for the API when creating a new post.
 */
@Getter
public class PostDetails implements Serializable {
    private String title;
    private String content;
}
