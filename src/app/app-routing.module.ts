import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./components/clients/index/index.component";
import {HomeComponent} from "./components/clients/home/home.component";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {CategoryComponent} from "./components/admin/category/category.component";
import {LoginPageComponent} from "./components/clients/login-page/login-page.component";

const routes: Routes = [
  {
    path: 'admin',component:DashboardComponent,
    children:[
      {path:"category",component: CategoryComponent}
    ]
  },
  {
    path: '', component: IndexComponent,
    children:[
      {path:'',component:HomeComponent}
    ]
  },
  {path:'login',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
