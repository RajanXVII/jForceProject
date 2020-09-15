import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchRoomService {

  private searchRoomUrl = 'http://localhost:8080/searchRoom';


 	constructor(private http: Http) { }

 	getrooms(roomSize: string, beginDate: string, endDate: string,roomType:string): Observable<string> {
 		let myParams = new URLSearchParams();
     myParams.set('roomSize', roomSize);
     const headers = new HttpHeaders()
     headers.set('Content-Type', 'text/plain');
     headers.set('charset','UTF-8');
 		// myParams.set('startDate', beginDate);
 		// myParams.set('endDate', endDate);
		//  myParams.set('roomType', roomType);
 		let options : Object= {params: myParams, headers: headers};
     
 		return this.http.get(this.searchRoomUrl, options).map((res: Response) => {
      
      })
 		.catch((error: any) => Observable.throw(error || 'Server error'));
 	}

}
