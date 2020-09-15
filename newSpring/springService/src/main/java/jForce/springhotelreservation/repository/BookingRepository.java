package jForce.springhotelreservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jForce.springhotelreservation.model.Booking;
import jForce.springhotelreservation.model.HotelRoom;

import java.time.LocalDate;
import java.util.List;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query(value = "select b from Booking b where b.hotelRoom.size = :size")
    List<Booking> findBookingByRoomSize(@Param("size") int size);

    List<Booking> findByHotelRoomAndEndDateGreaterThanOrderByEndDateAsc(HotelRoom hotelRoom, LocalDate date);
}
