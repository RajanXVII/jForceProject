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
	private loginUrl='http://localhost:8080/login';
	private summaryUrl='http://localhost:8080/summary';
	private registerUrl='http://localhost:8080/register';
	
	username:string;
status:boolean;
 	constructor(private http: Http) { }

 	bookReservation(roomSize: string, beginDate: string, endDate: string,roomType:string,username:string): Observable<any> {
 		let myParams = new URLSearchParams();
 		myParams.set('roomSize', roomSize);
 		myParams.set('startDate', beginDate);
 		myParams.set('endDate', endDate);
		 myParams.set('roomType', roomType);
		 if(username!='undefined'){
		 localStorage.setItem('username',username);}
		// alert(typeof username+"type")
		 if( username=='undefined')
		 {
			 username=localStorage.getItem("username");
			// alert(username+"undefined")
		 }
		 myParams.set('username', username);
		//alert(username)
 		let options = new RequestOptions({params : myParams});

 		return this.http.get(this.bookRoomUrl, options);
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
	 
	 login(username:string,password:string){
		// alert("in login"+username+password)
		let myParams = new URLSearchParams();
		myParams.set('username', username);
		myParams.set('password', password);
		this.username=username;
		//alert(this.username+"lopginwith book")
		let options = new RequestOptions({params : myParams});
		return this.http.get(this.loginUrl, options);
		}

		summary(username:string){
			let myParams = new URLSearchParams();
			myParams.set('username', username);
			this.username=username;
			let options = new RequestOptions({params : myParams});
			return this.http.get(this.summaryUrl, options);
		}

		register(name:string,username:string,email:string,password:string){
			let myParams = new URLSearchParams();
			myParams.set('name', name);
			myParams.set('username', username);
			myParams.set('email', email);
			myParams.set('password', password);
			//this.username=username;
			let options = new RequestOptions({params : myParams});
			return this.http.get(this.registerUrl, options);
		}
	 

}
