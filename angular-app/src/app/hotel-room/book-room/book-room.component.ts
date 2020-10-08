import { Component, OnInit } from '@angular/core';
import { HotelRoomService } from '../hotel-room.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css'],
  providers: [HotelRoomService]
})
export class BookRoomComponent implements OnInit {

	bookingForm: FormGroup;
  sub:any;
  username:any;
  status:boolean;
  constructor(private hotelRoomService: HotelRoomService, private router: Router,private route: ActivatedRoute) { 
    
    
  }

  ngOnInit() {
  	this.bookingForm = new FormGroup({
      roomSize: new FormControl('', Validators.required),
      beginDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      roomType: new FormControl('', Validators.required)
    });
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.username = params['username'] ;
      //console.log(this.username);
    });
  }

  onSubmit(){
   // alert(this.username);
    if (this.bookingForm.valid) {
      let beginDate = this.bookingForm.controls['beginDate'].value;
      let endDate = this.bookingForm.controls['endDate'].value;
      let roomSize = this.bookingForm.controls['roomSize'].value;
      let roomType = this.bookingForm.controls['roomType'].value;
      let username='';
      this.route.params.subscribe(params => username=(params['username']);
      console.log(username) );
      //alert(roomType);
      console.log(username);
      if(username!='undefined'){
      localStorage.setItem('username',username);
    }
      this.hotelRoomService.bookReservation(roomSize, beginDate, endDate,roomType,username).subscribe(res => {if(res.status==200){
        alert("Booked!!!");
        this.status=true;
        console.log(res);
      }
     //alert(res);
     },
     (err)=>{
       alert("Room not available!!!");
       this.status=false;
     
     });
      this.router.navigate(['/hotelmanager'],{ queryParams: { username:localStorage.getItem("username")}});
    }
  }

}
