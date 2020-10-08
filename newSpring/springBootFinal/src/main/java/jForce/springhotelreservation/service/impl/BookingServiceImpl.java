package jForce.springhotelreservation.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jForce.springhotelreservation.exception.NoAvailableRoomsException;
import jForce.springhotelreservation.model.Booking;
import jForce.springhotelreservation.model.HotelRoom;
import jForce.springhotelreservation.repository.BookingRepository;
import jForce.springhotelreservation.service.BookingService;
import jForce.springhotelreservation.service.HotelRoomService;
import jForce.springhotelreservation.utils.BookingUtils;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
@Service
public class BookingServiceImpl implements BookingService {

    private Logger logger = Logger.getLogger(BookingServiceImpl.class.getName());

    @Autowired
    private HotelRoomService hotelRoomService;

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public Booking bookHotelRoom(int roomSize, LocalDate beginDate, LocalDate endDate) throws NoAvailableRoomsException {
        HotelRoom hotelRoom = getHotelRoomForBooking(roomSize, beginDate, endDate);
        Booking booking = new Booking();
        booking.setHotelRoom(hotelRoom);
        booking.setBeginDate(beginDate);
        booking.setEndDate(endDate);
        return bookingRepository.save(booking);
    }

    @Override
    public HotelRoom getHotelRoomForBooking(int roomSize, LocalDate beginDate, LocalDate endDate) throws NoAvailableRoomsException {
        List<HotelRoom> hotelRoomList = hotelRoomService.getHotelRoomBySize(roomSize);
        logger.info(String.format("found %d rooms with size %d", hotelRoomList.size(), roomSize));
        if (!hotelRoomList.isEmpty()) {
            Map<HotelRoom, List<Booking>> bookingsForHotelRoom = new HashMap<>();

            for (HotelRoom hotelRoom : hotelRoomList) {
                List<Booking> futureBookingsForHotelRoom = checkIsRoomHasActiveBookings(hotelRoom, beginDate);
                if (futureBookingsForHotelRoom.isEmpty()) return hotelRoom;
                bookingsForHotelRoom.put(hotelRoom, futureBookingsForHotelRoom);
            }

            for (Map.Entry<HotelRoom, List<Booking>> entry : bookingsForHotelRoom.entrySet()) {
                if (BookingUtils.isBookingAvailable(entry.getValue(), beginDate, endDate)) return entry.getKey();
            }

        }
        throw new NoAvailableRoomsException();
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public void cancelBooking(Long bookingId) {
        bookingRepository.delete(bookingId);
    }

    private List<Booking> checkIsRoomHasActiveBookings(HotelRoom hotelRoom, LocalDate startDate) {
        return bookingRepository.findByHotelRoomAndEndDateGreaterThanOrderByEndDateAsc(hotelRoom, startDate);
    }
}
