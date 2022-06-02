import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product = new Product;
  id:any;
  constructor(private service: NgserviceService, private route: Router, private a_router: ActivatedRoute) { }

  editProduct(){
    this.service.addProductToRemote(this.product).subscribe(
      data=>{
        data =this.route.navigate(['editProduct']);
      });
  }

  ngOnInit(){
    this.id = this.a_router.snapshot.paramMap.get('id');
    this.id = parseInt(this.id);
    this.service.ProductListById(this.id).subscribe(
      Response=>{
        this.product = Response;
      }
    )
  }
}
