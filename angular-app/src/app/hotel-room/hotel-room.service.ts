import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Response, RequestOptions, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Room} from "./Room";
import {Booking} from "./Booking";

@Injectable()
export class HotelRoomService {

	private bookRoomUrl = 'http://localhost:8080/bookRoom';
	private cancelBookingUrl = 'http://localhost:8080/cancelBooking';

 	constructor(private http: Http) { }

 	bookReservation(roomSize: string, beginDate: string, endDate: string,roomType:string): Observable<string> {
 		let myParams = new URLSearchParams();
 		myParams.set('roomSize', roomSize);
 		myParams.set('startDate', beginDate);
 		myParams.set('endDate', endDate);
		 myParams.set('roomType', roomType);
 		let options = new RequestOptions({params : myParams});

 		return this.http.get(this.bookRoomUrl, options).map((res: Response) => {if(res.status==200){
			 alert("Booked!!");
		 }
		//alert(res);
		})
 		.catch((error: any) => Observable.throw(error || 'Server error'));
 	}

 	cancelReservation(bookingId: string): Observable<string> {
 		let myParams = new URLSearchParams();
 		myParams.set('id', bookingId);

 		let options = new RequestOptions({params : myParams});

 		 return this.http.delete(this.cancelBookingUrl, options).map((res: Response) => {if(res.status==200){
			alert("Canceled!!");}
		})
 		.catch((error: any) => Observable.throw(error || 'Server error'));;
 	}

}
