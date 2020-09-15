package jForce.springhotelreservation.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jForce.springhotelreservation.model.HotelRoom;
import jForce.springhotelreservation.repository.HotelRoomRepository;
import jForce.springhotelreservation.service.HotelRoomService;

import java.util.List;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
@Service
public class HotelRoomServiceImpl implements HotelRoomService {

    @Autowired
    private HotelRoomRepository hotelRoomRepository;

    @Override
    public List<HotelRoom> getHotelRoomBySize(int size) {
        return hotelRoomRepository.findBySize(size);
    }
}
