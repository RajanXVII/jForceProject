package jForce.springhotelreservation.exception;

import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
@Getter
@Setter
public class ApiError {

    private int code;
    private String message;
    private Instant timestamp;

    public ApiError(int code, String message) {
        this.code = code;
        this.message = message;
        this.timestamp = Instant.now();
    }
}
