import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  product$:any;

  constructor(private service: NgserviceService) {
    this.product$ = service.ProductList();
   }
}
