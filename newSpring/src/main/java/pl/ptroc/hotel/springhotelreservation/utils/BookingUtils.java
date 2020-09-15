package pl.ptroc.hotel.springhotelreservation.utils;

import pl.ptroc.hotel.springhotelreservation.model.Booking;

import java.time.LocalDate;
import java.util.List;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
public class BookingUtils {

    public static boolean isBookingAvailable(List<Booking> bookingList, LocalDate beginDate, LocalDate endDate) {
        boolean isAvailable = false;

        for(Booking booking : bookingList) {
            isAvailable = !areDatesOverlapping(booking.getBeginDate(), booking.getEndDate(), beginDate, endDate);
        }

        return isAvailable;
    }

    private static boolean areDatesOverlapping(LocalDate startDate1, LocalDate endDate1, LocalDate startDate2,
                                               LocalDate endDate2) {
        return startDate1.isBefore(endDate2) && endDate1.isAfter(startDate2);
    }
}
