package li.jc.api.post.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "Post already exists")
public
class PostAlreadyExistsException extends RuntimeException {
    public PostAlreadyExistsException(String s) { super ("POST ALREADY EXISTS --> " + s); }
}
