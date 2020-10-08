import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HotelRoomService} from '../hotel-room/hotel-room.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    providers: [HotelRoomService]
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    loginForm:any
    submitted:false
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private hotelRoomService:HotelRoomService,
        private formBuilder:FormBuilder) { }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
        // reset login status
      //  this.authenticationService.logout();

        // get return url from route parameters or default to '/'
     //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() { return this.loginForm.controls; }
    login() {
       // this.loading = true;
        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });

       // alert(this.model.username+this.model.password);
        this.hotelRoomService.login(this.model.username, this.model.password).subscribe(
          res => 
          {
            
            //alert((res._body ));
          if(res._body.includes("failed"))
          {

            alert("Password dont match")
            // this.router.navigate(['/']);
            // this.model.username='';
            // this.model.password='';
            //this.submitted=false;
            window.location.reload();

          }
          else{
            alert("Logged in!!")
            this.router.navigate(['/hotelmanager'],{ queryParams: { username: this.model.username } });
          }
        
          },err => {
            console.log(err.status);
            if(err.status==500){
              alert("username does not exist!!");
            }
            window.location.reload();
           // check error status code is 500, if so, do some action
          }
        );
        
    }
}
