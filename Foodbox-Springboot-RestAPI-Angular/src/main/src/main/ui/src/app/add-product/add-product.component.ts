import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  
  product = new Product;
  category;
  constructor(private service: NgserviceService) {
    this.category = service.CategoryList();
   }

  ngOnInit(): void {
  }

  addProduct(){
    this.service.addItem(this.product);
  }


}
