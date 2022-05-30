import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.css']
})
export class ChineseComponent implements OnInit {

  chinese$:any;
  category:string = 'Chinese'

  constructor(private service: NgserviceService) {
    this.chinese$ = service.categoryList(this.category);
   }

  ngOnInit(): void {
  }

}
