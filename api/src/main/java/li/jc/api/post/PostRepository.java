package li.jc.api.post;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends PagingAndSortingRepository<Post, Integer> {
    List<Post> findAll();
    Optional<Post> getPostById(int id);
    boolean existsPostByTitle(String name);
}
