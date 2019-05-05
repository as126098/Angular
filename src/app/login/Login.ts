export class Login{
   
    user_account : any;
    
     user_password : string;


    constructor(user_account : any,user_password : string) {
        this.user_account=user_account;
        this.user_password=user_password;
    }
}