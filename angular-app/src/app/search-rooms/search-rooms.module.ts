import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchRoomComponent} from '.././hotel-room/search-room/search-room.component';
import { SearchRoomsRoutingModule } from './search-rooms-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    SearchRoomsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SearchRoomComponent]
})
export class SearchRoomsModule { }
