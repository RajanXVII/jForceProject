package jForce.springhotelreservation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import jForce.springhotelreservation.exception.NoAvailableRoomsException;
import jForce.springhotelreservation.model.Booking;
import jForce.springhotelreservation.model.HotelRoom;
import jForce.springhotelreservation.repository.BookingRepository;
import jForce.springhotelreservation.repository.HotelRoomRepository;
import jForce.springhotelreservation.service.BookingService;

import java.time.LocalDate;
import java.util.List;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/bookRoom")
    @ResponseBody
    public String bookHotelRoom(@RequestParam(value = "roomSize") int roomSize, @RequestParam(value
            = "startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate, @RequestParam(value =
            "endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) throws NoAvailableRoomsException {
        bookingService.bookHotelRoom(roomSize, startDate, endDate);
        return "OK";
    }

    @DeleteMapping("/cancelBooking")
    @ResponseBody
    public String cancelBooking(@RequestParam(value = "id") Long bookingId) {
        bookingService.cancelBooking(bookingId);
        return "OK";
    }


    @GetMapping("/getAllBookings")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }
}
