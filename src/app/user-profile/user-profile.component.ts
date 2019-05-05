import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { OTPServiceService } from '../otpservice.service';
import { User } from '../User';
import { analyzeAndValidateNgModules } from '@angular/compiler';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userAccount: String;
  public user2 : User;
  errorMessage: String;
  flag : boolean=false;
  
  a:any;
  b:any;
  c:any;
  d:any;
  e:any;
  f:any;


  
  
  async  SaveTableAsync(userAccount: String) {
    await this.otpSer.getUserProfile(this.userAccount).subscribe(
      async response => {
        this.user2 = response;
        this.flag = true;
        this.otpSer.testq =  this.user2.email_id;
        console.log("inside method "+this.user2.user_account);
    },
    error => this.errorMessage = <any>error
    );
    console.log("outside method "+this.user2 );
  }

  constructor(private route: ActivatedRoute,private otpSer : OTPServiceService,private router:Router) {
    this.userAccount = this.route.snapshot.paramMap.get('abc');
    let counter : number = 0;
    let booleanT:boolean =false;
    if(this.SaveTableAsync(this.userAccount)){
      // console.log("outside method "+this.user2 );
      alert("outside method "+this.user2);     
    };
    // any i = 0;
   
    // while (counter < 4) {
    //   if(this.user2 == null ){
    //     counter = counter + 1;
    //     waits(1000);
    //   }
    //   else
    //     counter = 5;
    // }


   }
   

  ngOnInit() {
     this.user2 = null;
     
}



  getUserDetails(){
    // this.router.navigateByUrl('/resentOTP');
    // console.log("outside method "+this.user2 );
   }

   updateEmail(){

    this.otpSer.dataFromService = this.user2.user_account;
    this.otpSer.dataFromService3 = this.user2.email_id;
    this.router.navigateByUrl('/updateEmail');
   }

}
