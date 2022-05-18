package li.jc.api.post.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Post not found")
public
class PostNotFoundException extends RuntimeException {
    public PostNotFoundException(String s) {
        super("POST NOT FOUND --> " + s);
    }
}
