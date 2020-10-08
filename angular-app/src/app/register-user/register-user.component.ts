import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HotelRoomService} from '../hotel-room/hotel-room.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';

//import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register-user.component.html',
    providers: [HotelRoomService]
})

export class RegisterUserComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    registerForm:any
    submitted:false
    constructor(
        private router: Router,
        
        private route: ActivatedRoute,
        private hotelRoomService:HotelRoomService,
        private formBuilder:FormBuilder) { }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required],
        username: ['', Validators.required]
    });
        // reset login status
      //  this.authenticationService.logout();

        // get return url from route parameters or default to '/'
     //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() { return this.registerForm.controls; }
    ValidateEmail(mail) 
        {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
          {
            return (true)
          }
            alert("You have entered an invalid email address!!!")
            return (false)
        }

         CheckPassword(inputtxt) 
          { 
           
            if(/^[A-Za-z]\w{7,14}$/.test(inputtxt)) 
              { 
             //alert('Correct, try another...');
                return true;
              }
            else
              { 
             alert('Password should be 7-14 characters long!!!!')
                return false;
              }
          }

    register() {
      //alert(this.CheckPassword(this.model.password)+"password");
      //alert(this.ValidateEmail(this.model.email)+"email");
      //alert(this.model.password);
      if((!this.ValidateEmail(this.model.email)) ){
        //alert("No!!")
        return;
      }
      if( (!this.CheckPassword(this.model.password))){
        return;
      }
      


      this.hotelRoomService.register(this.model.name,this.model.username,this.model.email,this.model.password).subscribe(
        res=>{
          if(res._body.includes("failed"))
          {
            alert("User already exists");
            //window.location.reload();
          }
          else{
            alert("Registered Successfully");
            this.router.navigate(['/']);
          }
        }

      );

    }
    back(){
      this.router.navigate(['/']);
    }
}
