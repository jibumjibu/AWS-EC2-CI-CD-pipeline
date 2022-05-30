import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  
  urlProd = 'http://localhost:8080/products';
  urlCat = 'http://localhost:8080/category';
  urlUsers = 'http://localhost:8080/users';
  urlLogin = 'http://localhost:8080/login';


  currentUser:User = {id:0, name:'', email:'', password:''};
  
  constructor(private http: HttpClient) { }

  ProductList():Observable<any>{
    return this.http.get<any>(this.urlProd);
  }

  categoryList(category:string):Observable<any>{
    return this.http.get<any>('http://localhost:8080/'+category)
  }

  CategoryList():Observable<any>{
    return this.http.get<any>(this.urlCat);
  }

  ProductListById(id:number):Observable<any>{
    return this.http.get<any>(this.urlProd+'/'+id);
  }

  addProductToRemote(product: Product) {
    return this.http.post<any>(this.urlProd, product)
  }

  addItem (product:any) {
    this.http.post(this.urlProd, product).subscribe(data=>{
      product = data;
      return product;
    });
  }

  addUser (user:any){
    this.http.post<any>(this.urlUsers, user).subscribe(data=>{
      user = data;
      return user;
    });
  }
  

  UserList():Observable<any>{
    return this.http.get<any>(this.urlUsers);
  }

  userLogin(user:any):Observable<any>{
    return this.http.post<any>(this.urlLogin, user);
  }

  removeItem(id:number){
    this.http.delete(this.urlProd+'/'+id);
  }

}
