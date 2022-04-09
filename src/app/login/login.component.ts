import { Component, OnInit } from '@angular/core';
import User from '../User';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router"
import { Form } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  user:User=new User();

  warning:string="";
  loading:boolean=false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: Form): void {

    if(this.user.userName!="" && this.user.password!=""){
      this.loading = true;
      this.auth.login(this.user).subscribe((success)=>{
      
          
          this.warning="";
          this.loading=false;
          // store the returned token 
          this.auth.setToken(success.token);
          this.router.navigate(['/newReleases']);
          console.log(this.loading)
          console.log(this.user);
        
        // re
      },(err)=>{
        
          this.warning=err.error.message;
          this.loading=false;
      })
      }
    }

}
