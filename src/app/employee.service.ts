import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  Empdata: any = [];
  token:any

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')
    console.log(this.token)
   }

  otherLogin(body:any){
    return this.http.post("https://task-api.pushpak.ml/api/login", body)
  }

  getOrderList()
  { 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiYzQ5MGRmYTgtZWJmMy00NTE5LWI1M2EtZDc1Y2I3NGJlMDUwIiwiVXJ2aXNoIiwiU2hhaCIsInVydmlzaC5zaGFoQHB1c2hwYWsuYWkiXSwiaWF0IjoxNjQ5NzUyODc0LCJleHAiOjE2ODEyODg4NzR9.13UfXk_CVjKSqyC5pq2HgQK6KKI_PPM886C0dZB5CtM`
      }),
    };
   return this.http.get('https://task-api.pushpak.ml/api/orders?page=1&limit=15&order_status=',httpOptions)
  }

  getOrderSum()
  { 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiYzQ5MGRmYTgtZWJmMy00NTE5LWI1M2EtZDc1Y2I3NGJlMDUwIiwiVXJ2aXNoIiwiU2hhaCIsInVydmlzaC5zaGFoQHB1c2hwYWsuYWkiXSwiaWF0IjoxNjQ5NzUyODc0LCJleHAiOjE2ODEyODg4NzR9.13UfXk_CVjKSqyC5pq2HgQK6KKI_PPM886C0dZB5CtM'
      }),
    };
    return this.http.get('https://task-api.pushpak.ml/api/analytics/summary',httpOptions)
  }


  getOrderLast7()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOlsiYzQ5MGRmYTgtZWJmMy00NTE5LWI1M2EtZDc1Y2I3NGJlMDUwIiwiVXJ2aXNoIiwiU2hhaCIsInVydmlzaC5zaGFoQHB1c2hwYWsuYWkiXSwiaWF0IjoxNjQ5NzUyODc0LCJleHAiOjE2ODEyODg4NzR9.13UfXk_CVjKSqyC5pq2HgQK6KKI_PPM886C0dZB5CtM`
      }),
    };
    return this.http.get('https://task-api.pushpak.ml/api/analytics/last7Days',httpOptions)
  }

}

