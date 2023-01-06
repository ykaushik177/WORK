import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { EmployeeComponent } from './attendance/attendance.component';
// import { LeavesComponent } from './leaves/leaves.component';
// import { SalaryComponent } from './salary/salary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
// import { FormTestComponent } from './form-test/form-test.component';
import { CommonModule } from '@angular/common';
import { MyLoginComponent } from './my-login/my-login.component';
// import { InterInterceptor } from './inter.interceptor';
// import { JwtInterceptor } from './jwt.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MyLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
