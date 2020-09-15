import { Component, OnInit } from '@angular/core';
import { HotelRoomService } from '../hotel-room.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css'],
  providers: [HotelRoomService]
})
export class CancelBookingComponent implements OnInit {
	cancelBookingForm: FormGroup;

  constructor(private hotelRoomService: HotelRoomService, private router: Router) { }

  ngOnInit() {
  	  this.cancelBookingForm = new FormGroup({
      bookingId: new FormControl('', Validators.required)
    });
  }

    onSubmit(){
    if (this.cancelBookingForm.valid) {
      this.hotelRoomService.cancelReservation(this.cancelBookingForm.controls['bookingId'].value).subscribe();
      this.router.navigate(['/']);
    }
  }

}
