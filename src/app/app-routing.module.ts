import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyLoginComponent } from './my-login/my-login.component';

const routes: Routes = [
  // {path:'',component: LoginComponent},
  {path:'dashboard', component: HomeComponent},
  {path:'', component: MyLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
