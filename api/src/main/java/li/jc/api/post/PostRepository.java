package li.jc.api.post;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends PagingAndSortingRepository<Post, Integer> {
    Page<Post> findAll(Pageable pageable);
    List<Post> findAll();
    Optional<Post> getPostById(int id);
    boolean existsPostByTitle(String name);
}
