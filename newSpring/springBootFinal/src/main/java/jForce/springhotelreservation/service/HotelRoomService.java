package jForce.springhotelreservation.service;

import java.util.List;

import jForce.springhotelreservation.model.HotelRoom;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
public interface HotelRoomService {

    List<HotelRoom> getHotelRoomBySize(int size);
}
