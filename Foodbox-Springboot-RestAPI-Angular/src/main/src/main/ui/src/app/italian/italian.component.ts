import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-italian',
  templateUrl: './italian.component.html',
  styleUrls: ['./italian.component.css']
})
export class ItalianComponent implements OnInit {

  italian$:any;
  category:string = 'Italian'

  constructor(private service: NgserviceService) {
    this.italian$ = service.categoryList(this.category);
   }

  ngOnInit(): void {
  }

}
