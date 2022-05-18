package li.jc.api.topic;

import li.jc.api.post.Post;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * JPA Entity representing a record from the Topic Entity table in the Database.
 */
@Getter
@Builder
@Entity
@ToString
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
@Table(name = "topic")
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false, unique = true, length = 30)
    @NonNull
    private String name;

    @ManyToMany(mappedBy = "topics")
    @ToString.Exclude
    private List<Post> posts = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Topic topic = (Topic) o;
        return id.equals(topic.id) && name.equals(topic.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }
}