import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor(private router: Router,private empService: EmployeeService) { }

  ngOnInit(): void {
    // this.lastDays()
  }

  logout(){
localStorage.clear();    
this.router.navigate([''])
  }


}
