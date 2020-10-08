import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HotelRoomModule } from './hotel-room/hotel-room.module';
import {HttpModule} from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchRoomComponent } from './hotel-room/search-room/search-room.component';
import { LoginComponent } from './login/login.component';
import { HotelManagementComponent } from './hotel-management/hotel-management.component';
import { SummaryComponent } from './summary/summary.component';
import { RegisterUserComponent } from './register-user/register-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchRoomComponent,
    LoginComponent,
    HotelManagementComponent,
    SummaryComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotelRoomModule,
    HttpModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
