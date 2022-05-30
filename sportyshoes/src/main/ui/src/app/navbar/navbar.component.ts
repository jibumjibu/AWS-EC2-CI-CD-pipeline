import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = new User();
  constructor(private service: NgserviceService) {
   }
  ngOnInit(): void {
    
  }

  login(){
      this.service.userLogin(this.user).subscribe(data=>{
        this.user = data;
        this.service.currentUser = this.user;
        console.log(this.service.currentUser);
      })
    }
  
  logout(){
    this.user.email = '';
    this.user.password = '';
    this.service.userLogin(this.user).subscribe(data=>{
      this.user = data;
      this.service.currentUser = this.user;
      console.log(this.service.currentUser);
    })
  }
}
