package jForce.springhotelreservation.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
@Entity
@Table(name = "hotel_room")
@Getter
@Setter
@NoArgsConstructor
public class HotelRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "size", nullable = false)
    private Integer size;

    @Column(name = "room_number", nullable = false, unique = true)
    private int roomNumber;

    @Column(name = "price")
    private int price;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "hotelRoom")
    @JsonBackReference
    private List<Booking> bookingList;
}
