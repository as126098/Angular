export class User{
   

     user_account : any;
     user_name: string;
     user_password : string;
     age : any;
     mobile_no : string;
     email_id : string;


    constructor(user_account : any,user_name :string, user_password : string,age:any,mobile_no:string,email_id:string) {
        this.user_account = user_account;
        this.user_name = user_name;
        this.user_password = user_password;
        this.age = age;
        this.mobile_no = mobile_no;
        this.email_id = email_id;
    }
}
