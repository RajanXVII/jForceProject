import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoomRoutingModule } from './hotel-room-routing.module';
import { BookRoomComponent } from './book-room/book-room.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';

@NgModule({
  imports: [
    CommonModule,
    HotelRoomRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BookRoomComponent, CancelBookingComponent]
})
export class HotelRoomModule { }
