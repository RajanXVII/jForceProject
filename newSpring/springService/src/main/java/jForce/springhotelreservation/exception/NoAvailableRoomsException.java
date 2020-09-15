package jForce.springhotelreservation.exception;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
public class NoAvailableRoomsException extends Exception {
    public NoAvailableRoomsException() {
        super("No available rooms!");
    }
}
