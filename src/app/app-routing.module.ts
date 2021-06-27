import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'createStock',component:CreateStockComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
