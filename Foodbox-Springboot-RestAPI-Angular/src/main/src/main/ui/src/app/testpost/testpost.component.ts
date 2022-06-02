import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpost',
  templateUrl: './testpost.component.html',
  styleUrls: ['./testpost.component.css']
})
export class TestpostComponent implements OnInit {

  posts:any;
  constructor(private http: HttpClient) { }

  createPost(input: HTMLInputElement) {

    let post:any = {name: input.value};
    input.value = '';

    this.http.post('/products', post)
    .subscribe(Response => {
      post.id = Response;
      this.posts.push;
    });
  }

  ngOnInit(): void {
  }

}