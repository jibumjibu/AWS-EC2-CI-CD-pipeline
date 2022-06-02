import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  posts:any;
  constructor(private http: HttpClient) { 
    this.http.get('/products').subscribe(Response => {
      this.posts = Response
    });
  }

  ngOnInit(): void {
  }

}
