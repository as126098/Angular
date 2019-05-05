export class OTP{
   
    result:number;
    emailId:string;
    account : number;

    constructor(result : number, uname:string, account:number) {
        this.result = result;
        this.emailId=uname;
        this.account = account;
    }
}
