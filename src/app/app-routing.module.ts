import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {LoginComponent} from './login/login.component';
import {CaddyComponent} from './caddy/caddy.component';
import {ClientComponent} from './client/client.component';
import {ProductComponent} from './product/product.component';
import {PaymentComponent} from './payment/payment.component';
import { CategoryComponent } from './category/category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';


const routes: Routes = [
  {path:'products/:p1/:p2',component:ProductsComponent},
  {path:'',redirectTo:'products/1/0',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'caddy', component:CaddyComponent},
  {path:'client', component:ClientComponent},
  {path:'product/:id', component:ProductComponent},
  {path:'payment/:orderID', component:PaymentComponent},
  {path:'category', component:CategoryComponent},
  {path: 'add-category', component: AddCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }