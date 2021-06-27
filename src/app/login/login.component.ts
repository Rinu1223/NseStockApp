import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private dataservice:DataService,private router:Router) { }
  loginform=this.fb.group({
    Username:['',Validators.required],
    pswd:['',Validators.required]
  })

  login(){

    if(this.loginform.valid){
      let Username=this.loginform.value.Username;
      let password=this.loginform.value.pswd;
      this.dataservice.login(Username,password)
      .subscribe((result:any)=>{
        if(result){
          localStorage.setItem("name",result.name)
          localStorage.setItem("uID",result.uID)
          alert(result.message);
          this.router.navigateByUrl("home");
       
        }
      },
      (result)=>{
        alert(result.error.message);
        
      
      })
     }
     else{
       alert("Invalid form")
     }
    
  }

  ngOnInit(): void {
  }

}
