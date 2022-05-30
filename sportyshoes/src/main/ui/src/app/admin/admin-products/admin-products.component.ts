import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from 'src/app/ngservice.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  posts: any;
  product = new Product;
  constructor(private service: NgserviceService, private route: Router) { }

  ngOnInit(): void {
    this.service.ProductList().subscribe(Response =>
      this.posts = Response)
  }

  editProduct(id: number){
      this.route.navigate(['editProduct', id]);
    };

  deleteProduct(id: number){
    this.service.removeItem(id);
   };
}
