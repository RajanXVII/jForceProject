import { Component, OnInit } from '@angular/core';
import { ConnectionBackend } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {HotelRoomService} from '../hotel-room/hotel-room.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [HotelRoomService]
})
export class SummaryComponent implements OnInit {
username:string;
extractArr:any;
usernameHTML:string;
roomTypeHTML:string;
beginDateHTML:string;
endDateHTML:string;
bookingId:string;
titleArr:string[];
  constructor( private router: Router,private route: ActivatedRoute,
    private hotelRoomService:HotelRoomService) { }

  ngOnInit() {
    let username:any;
    this.route.params.subscribe(params =>username=(params['username']));
    if(username!='undefined'){
      localStorage.setItem('username',username);
    }
    if(username=='undefined'){
      username=localStorage.getItem('username');
    }
   //this.username=localStorage.getItem("username");
   this.hotelRoomService.summary(username).subscribe(
    res => 
    {var alphas:string[];
      var i; 
     console.log(JSON.parse(res._body))
     var test=JSON.parse(res._body);
     this.titleArr=test;
     console.log(this.titleArr)
      // alphas=res._body;
      // alphas=(JSON.parse(alphas));
      // console.log(alphas[0]);
      // //let extractArr;
      // this.extractArr=alphas[0];
      // this.usernameHTML=extractArr[0];
      // this.roomTypeHTML=extractArr[1];
      // this.beginDateHTML=extractArr[2];
      // this.endDateHTML=extractArr[3];
      // this.bookingId=extractArr[4];
      // this.titleArr=['Username':,'BookingId'];
this.username=username;
  });



}
back(){
  this.router.navigate(['/hotelmanager'],{ queryParams: { username: localStorage.getItem("username") }});
}
}