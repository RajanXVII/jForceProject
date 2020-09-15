package pl.ptroc.hotel.springhotelreservation.service;

import pl.ptroc.hotel.springhotelreservation.model.HotelRoom;

import java.util.List;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
public interface HotelRoomService {

    List<HotelRoom> getHotelRoomBySize(int size);
}
