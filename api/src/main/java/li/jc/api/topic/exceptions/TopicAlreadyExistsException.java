package li.jc.api.topic.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT)
public class TopicAlreadyExistsException extends RuntimeException {
    public TopicAlreadyExistsException(final String s) { super("TOPIC ALREADY EXISTS --> " + s); }
}
