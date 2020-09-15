package pl.ptroc.hotel.springhotelreservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.ptroc.hotel.springhotelreservation.model.Customer;

/**
 * Created by Paweł Troć on 2018-01-06.
 */
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
