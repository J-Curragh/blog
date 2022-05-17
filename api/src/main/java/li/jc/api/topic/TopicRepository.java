package li.jc.api.topic;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

interface TopicRepository extends PagingAndSortingRepository<Topic, Integer> {
    List<Topic> findAll();
    Optional<Topic> findTopicById(final int id);
    boolean existsTopicByName(final String name);
}