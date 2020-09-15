import { Component, OnInit } from '@angular/core';
import { SearchRoomService } from '../../search-room.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css'],
  providers: [SearchRoomService]
})
export class SearchRoomComponent implements OnInit {

	roomsForm: FormGroup;

  constructor(private searchRoomService: SearchRoomService, private router: Router) { }

  ngOnInit() {
  	this.roomsForm = new FormGroup({
      roomSize: new FormControl('', Validators.required),
      beginDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      roomType: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    alert("in submit search!!!");
    if (this.roomsForm.valid) {
      let beginDate = this.roomsForm.controls['beginDate'].value;
      let endDate = this.roomsForm.controls['endDate'].value;
      let roomSize = this.roomsForm.controls['roomSize'].value;
      let roomType = this.roomsForm.controls['roomType'].value;
      //alert(roomType);
      this.searchRoomService.getrooms(roomSize, beginDate, endDate,roomType).subscribe((data)=>{alert(data)});
      this.router.navigate(['/']);
    }
  }

}
