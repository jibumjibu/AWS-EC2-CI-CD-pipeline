import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestpostComponent } from './testpost/testpost.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { IndianComponent } from './indian/indian.component';
import { ChineseComponent } from './chinese/chinese.component';
import { ItalianComponent } from './italian/italian.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestpostComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AddProductComponent,
    NavbarComponent,
    EditProductComponent,
    ProductComponent,
    RegisterComponent,
    AdminUsersComponent,
    IndianComponent,
    ChineseComponent,
    ItalianComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: ProductComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckOutComponent},
      {path: 'addProduct', component: AddProductComponent},
      {path: 'editProduct/:id', component: EditProductComponent},
      {path: 'editProduct', component: EditProductComponent},
      {path: 'admin/products', component: AdminProductsComponent},
      {path: 'admin/orders', component: AdminOrdersComponent},
      {path: 'admin/users', component: AdminUsersComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'indian', component: IndianComponent},
      {path: 'chinese', component: ChineseComponent},
      {path: 'italian', component: ItalianComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
