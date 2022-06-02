import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user = new User;
  constructor(public service: NgserviceService) { }

  ngOnInit(): void {
  }

  login(){
    this.service.userLogin(this.service.currentUser).subscribe(data=>{
      this.service.currentUser = data;
    })
  }

}
