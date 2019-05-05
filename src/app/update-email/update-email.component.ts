import { Component, OnInit,Inject } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { OTPServiceService } from '../otpservice.service';

import { Email } from '../email';
import { User } from './user';
import { ErrorMessage } from './ErrorMessage';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.css']
})
export class UpdateEmailComponent implements OnInit {

  a:String;
  user1 :User;
   email:Email;
  account:number;
  e : Email;
  error : any;
  msg:any;
 
  constructor(private router : Router,private dataService : OTPServiceService,public dialog: MatDialog) { }

  ngOnInit() {
  }


  updateEmail(){
    
    


    this.dataService.dataFromService1 = this.a;
    
    this.account = this.dataService.dataFromService;
    this.e = new Email(this.account,this.a);

    console.log("email "+this.e.email_id);
    alert("email "+this.e.email_id);
    console.log("account "+this.e.user_account);
    alert("account "+this.e.user_account);
    this.dataService.testq = this.e.email_id;
    
     

        this.dataService.getStatus(this.e).subscribe(
          data => {
            alert(data.errorMessage);
            this.error = data.errorMessage ;
    
    
            if(this.error == "Email is Invalid"){
    
              this.msg = "Email is Invalid";
              this.router.navigateByUrl('/updateEmail');
            }
            else if(this.error == "email Id is Blacklisted"){
    
              this.msg = "email Id is Blacklisted";
              this.router.navigateByUrl('/updateEmail');
            }
            else{
    
              this.router.navigateByUrl('/otpGenerate');
            }
           
            
    
    
           
    
            
        });
    


    


    


      // this.router.navigateByUrl('/otpGenerate');
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog1, {
      width: '500px',
      height:'400px',
      data: {name: this.error}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }



}




// this.dataService.postEmail(this.e).subscribe(
//   data => {
//     this.email = data ;

@Component({
  selector: 'dialog-overview-example-dialog',
  template:`<div class="row"><div class="col-2">  </div>  <div class="col-10"><h1>Hello....{{data.name}}</h1></div>
  <hr>
  <button mat-raised-button color="primary" [mat-dialog-close]="data.animal" cdkFocusInitial>Close</button></div>`
})
export class DialogOverviewExampleDialog1 {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog1>,public router : Router,
    @Inject(MAT_DIALOG_DATA) public data: UpdateEmailComponent) {}
  

  onNoClick(): void {
   
    
    
    this.dialogRef.close();
  }

}