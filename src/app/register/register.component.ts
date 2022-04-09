import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { AuthService } from '../auth.service';
import RegisterUser from '../RegisterUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: RegisterUser= new RegisterUser();
  warning =  "";
  success = false;
  loading:boolean = false;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  OnSubmit(f:Form): void{
    if(this.registerUser.userName!="" && this.registerUser.password!="" && this.registerUser.password2!=""){
      this.loading = true;
      this.auth.register(this.registerUser).subscribe(()=>{
          this.success=true;
          this.warning="";
          this.loading=false;
          console.log(this.success,this.loading)
      },(err)=>{
          this.success=false;
          this.warning=err.error.message;
          this.loading=false;
      })
      }
    }
  }