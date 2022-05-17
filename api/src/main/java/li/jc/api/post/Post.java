package li.jc.api.post;

import li.jc.api.topic.Topic;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.time.Instant;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Builder
@Getter
@Setter
@Entity
@ToString
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name = "post", schema = "blog")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false, insertable = false)
    private Integer id;

    @NonNull
    @Column(name = "title", nullable = false)
    private String title;

    @NonNull
    @Lob
    @Column(name = "content", nullable = false)
    @ToString.Exclude
    private String content;

    @NonNull
    @Column(name = "created")
    private Instant created;

    @ManyToMany
    @JoinTable(name = "post_topic",
            joinColumns = @JoinColumn(name = "post_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "topic_id", referencedColumnName = "id"))
    @ToString.Exclude
    private Set<Topic> topics = new LinkedHashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Post post = (Post) o;
        return id != null && Objects.equals(id, post.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, created);
    }
}
