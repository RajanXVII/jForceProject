import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelManagementComponent } from './hotel-management/hotel-management.component';
import { LoginComponent } from './login/login.component';
import {BookRoomComponent} from './hotel-room/book-room/book-room.component';
import {SummaryComponent} from './summary/summary.component';
import {RegisterUserComponent} from './register-user/register-user.component'

const routes: Routes = [{path: '', component: LoginComponent },
{path:'hotelmanager',component:HotelManagementComponent},
{path:'bookRoom/:username',component:BookRoomComponent},
{path:'summary/:username',component:SummaryComponent},
{path:'register',component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
