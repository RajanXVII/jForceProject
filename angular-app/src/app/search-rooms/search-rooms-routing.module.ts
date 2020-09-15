import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchRoomComponent} from '.././hotel-room/search-room/search-room.component';

const routes: Routes = [{ path: 'searchRoom', component: SearchRoomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoomsRoutingModule { }
