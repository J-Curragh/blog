package li.jc.api.topic;

import lombok.Getter;

@Getter
public class TopicResponse {
    private final Integer id;
    private final String name;

    TopicResponse(final Topic topic) {
        this.id = topic.getId();
        this.name = topic.getName();
    }
}
