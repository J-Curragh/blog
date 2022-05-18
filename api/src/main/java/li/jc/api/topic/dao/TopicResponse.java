package li.jc.api.topic.dao;

import li.jc.api.post.dao.PostResponseNoTopics;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class TopicResponse {
    private final Integer id;
    private final String name;
    private List<PostResponseNoTopics> posts;

}
