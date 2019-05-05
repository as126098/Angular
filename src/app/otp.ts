export class OTP{
   

    otp : number;
    email_id : String;
    account : number;


//    constructor(otp : number,email_id:String,account:number) {
//        this.otp = otp;
      
//        this.email_id = email_id;
//        this.account = account;
//    }

constructor(otp : number,email_id:String, account:number) {
    this.otp = otp;
   
    this.email_id = email_id;
    this.account = account;
}
}
