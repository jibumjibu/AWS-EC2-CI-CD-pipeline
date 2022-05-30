import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-indian',
  templateUrl: './indian.component.html',
  styleUrls: ['./indian.component.css']
})
export class IndianComponent implements OnInit {

  indian$:any;
  category:string = 'Indian'

  constructor(private service: NgserviceService) {
    this.indian$ = service.categoryList(this.category);
   }

  ngOnInit(): void {
  }

}
