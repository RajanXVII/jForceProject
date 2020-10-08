import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hotel-management',
  templateUrl: './hotel-management.component.html',
  styleUrls: ['./hotel-management.component.css']
})
export class HotelManagementComponent implements OnInit {
sub:any;
username:any;
testuser:boolean;
checkadmin:boolean;
  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.username = params['username'] ;
      });
      if(this.username!='undefined'){
      localStorage.setItem('username',this.username);
    }
    if(this.username='undefined'){
      this.username=localStorage.getItem("username");
    }
      if(this.username=="admin"){
        this.testuser=true;
        this.checkadmin=false;
      }
      else{
        this.testuser=false;
        this.checkadmin=true;
      }
  }
  logout(){
    
  this.router.navigate(['/']);
}
}
