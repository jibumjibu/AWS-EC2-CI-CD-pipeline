import { Component, OnInit } from '@angular/core';
import { NgserviceService } from 'src/app/ngservice.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  posts: any;
  user = new User
  constructor(private service: NgserviceService) { }

  ngOnInit(): void {
    this.service.UserList().subscribe(Response =>
      this.posts = Response)
  }

}
