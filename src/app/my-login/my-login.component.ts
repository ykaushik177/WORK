import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  form !: FormGroup

  constructor(private fb: FormBuilder,
    private empService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.form = this.fb.group({
      username: ['',[Validators.required]],
      password:['',[Validators.required]]
    })

  }

  get username(): FormControl{
    return this.form.get('username') as FormControl;
  }
  get password(): FormControl{
   return this.form.get('password') as FormControl;
  }

  enterForm(){
    let body = {
      "username":this.form.value.username,
      "password": this.form.value.password
    }
debugger
      this.empService.otherLogin(body).subscribe((data:any)=>{
        console.log(data);
        // if(data.message == "Logged in successfully"){    
          alert(data.message)
          this.router.navigate(['dashboard']);
          localStorage.setItem('token',data.token)
        // }
        // else{
        //   if(data.message == "Incorrect Email or Password"){
        //     alert('Incorrect Email or Password')
        //   }
        // }
      },err => {
        if (err) {
          console.log('HTTP Error', err.error?.message)
          alert(err?.message)
        }

      })
  }

  show:boolean = true;
  showPass() {
    this.show = !this.show;
}
}
