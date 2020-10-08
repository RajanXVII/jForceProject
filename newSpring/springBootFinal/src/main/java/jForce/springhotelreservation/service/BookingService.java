package jForce.springhotelreservation.service;

import java.time.LocalDate;
import java.util.List;

import jForce.springhotelreservation.exception.NoAvailableRoomsException;
import jForce.springhotelreservation.model.Booking;
import jForce.springhotelreservation.model.HotelRoom;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
public interface BookingService {

    Booking bookHotelRoom(int roomSize, LocalDate beginDate, LocalDate endDate) throws NoAvailableRoomsException;

    HotelRoom getHotelRoomForBooking(int roomSize, LocalDate beginDate, LocalDate endDate) throws NoAvailableRoomsException;

    List<Booking> getAllBookings();

    void cancelBooking(Long bookingId);
}
