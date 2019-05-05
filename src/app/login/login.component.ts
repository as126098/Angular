import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { OTPServiceService } from '../otpservice.service';
import { User } from '../User';
import { Login } from './Login';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  a:String;
  b:any;
  user2 : User;
  loginDetail : Login;
  c:any;
  msg:any;
  constructor(private router : Router, private dataService : OTPServiceService,private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  addDetails(){
    // console.log("inside addDetails");
    // this.router.navigateByUrl('/generateOTP');
    // this.dataService.getDetails1(this.a).subscribe(
    //   data => {
        
    //     this.user2 = data;
        
    // });

    // console.log("a"+this.a);
    
     this.dataService.dataFromService = this.a;

     this.loginDetail = new Login(this.a,this.b);
     this.dataService.checkPassword(this.loginDetail).subscribe(
       data =>{
       
         
        this.c = JSON.parse(JSON.stringify(data)).txt;


        if(this.c == "Successfully Login"){



          alert("Successfully Login")
          this.msg = "Successfully Login";
          this.router.navigate(['/user',this.a]);
        }
        else{



          alert("Failed To Login Enter Correct Password")
          
         
          this.msg = "Failed To Login Enter Correct Password";
          
          this.router.navigate(['/login']);
        }

       
        
       })
     
    



   

  }
}
