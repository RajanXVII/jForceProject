import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRoomComponent } from './book-room/book-room.component';
import { CancelBookingComponent} from './cancel-booking/cancel-booking.component';
import { SearchRoomComponent } from './search-room/search-room.component';


const routes: Routes = [
	{ path: 'bookRoom', component: BookRoomComponent },
  { path: 'cancelBooking', component: CancelBookingComponent},
  { path:'searchRoom', component:SearchRoomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoomRoutingModule { }
