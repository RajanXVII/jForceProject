import { Component, OnInit } from '@angular/core';
import { HotelRoomService } from '../hotel-room.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css'],
  providers: [HotelRoomService]
})
export class BookRoomComponent implements OnInit {

	bookingForm: FormGroup;

  constructor(private hotelRoomService: HotelRoomService, private router: Router) { }

  ngOnInit() {
  	this.bookingForm = new FormGroup({
      roomSize: new FormControl('', Validators.required),
      beginDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      roomType: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    if (this.bookingForm.valid) {
      let beginDate = this.bookingForm.controls['beginDate'].value;
      let endDate = this.bookingForm.controls['endDate'].value;
      let roomSize = this.bookingForm.controls['roomSize'].value;
      let roomType = this.bookingForm.controls['roomType'].value;
      //alert(roomType);
      this.hotelRoomService.bookReservation(roomSize, beginDate, endDate,roomType).subscribe();
      this.router.navigate(['/']);
    }
  }

}
