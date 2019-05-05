import { Component,Inject, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { OTPServiceService } from '../otpservice.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { OTP } from './otp';
import { User } from '../User';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-generate-otp',
  templateUrl: './generate-otp.component.html',
  styleUrls: ['./generate-otp.component.css']
})
export class GenerateOTPComponent implements OnInit {

  otp :OTP;
  constructor(private otpSer : OTPServiceService,private router : Router,public dialog: MatDialog) { }
  a: any;
  b:any;
  res:any;
  emailidFromBackend:string="";
  user1:User;
  users:string;
  c:any;
  otp3:OTP
  account : number;
  emailid:any;
  user3 : User;
  msg1 : any;
  

  ngOnInit() {
  }



  verifyOTP(){
     


      this.account= this.otpSer.dataFromService;
      this.emailid = this.otpSer.testq;
      console.log(this.emailid);
      this.otp3 = new OTP(this.b,this.emailid,this.account);
      // debugger;
      alert(JSON.stringify(this.otp3) );
      // debugger;
      console.log("account number from verify method"+this.account);
      this.otpSer.otpCheck(this.otp3).subscribe(
        data => {
          this.c = data; 

          
          if(this.b == this.c){
            this.msg1 = "otp matched successfully";
           }
           else{
            this.msg1 = "otp failed to match";
           }
          alert(data);
          // this.openDialog();
      })

      
  

      // alert(this.c);
      
      
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      height:'400px',
      data: {name: this.msg1}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

   resendOTP(){
    // this.router.navigateByUrl('/resentOTP');
    this.otpSer.getResendDetails().subscribe(
      data => {
        // this.emailidFromBackend = data;
        alert(data);
        this.otpSer.testq = data.email_id;
        this.otpSer.dataFromService = data.user_account;
        this.emailidFromBackend =  data.email_id;
        this.account = data.user_account;
        alert(this.otpSer.testq);
        alert(this.otpSer.dataFromService);
        alert("Email Is from Component"+this.emailidFromBackend);
        alert("Account in Component"+this.account);

    })

    //  console.log(this.emailidFromBackend);
   }




   
}


@Component({
  selector: 'dialog-overview-example-dialog',
  template:`<div class="row"><div class="col-2">  </div>  <div class="col-10"><h1>Hello....{{data.name}}</h1></div>
  <hr>
  <button mat-raised-button color="primary" [mat-dialog-close]="data.animal" cdkFocusInitial>Close</button></div>`
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: GenerateOTPComponent) {}
  

  onNoClick(): void {
    this.dialogRef.close();
  }

}
