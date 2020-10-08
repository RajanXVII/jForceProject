package jForce.springhotelreservation.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;

import jForce.springhotelreservation.exception.ApiError;
import jForce.springhotelreservation.exception.NoAvailableRoomsException;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(NoHandlerFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiError noHandlerFoundException(NoHandlerFoundException ex) {
        return new ApiError(1000, "No handler found for your request.");
    }

    @ExceptionHandler(NoAvailableRoomsException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiError noAvailableRoomsException(NoAvailableRoomsException ex) {
        return new ApiError(666, ex.getMessage());
    }

}
