export class Email{
   

    user_account : number;
    email_id : String;


   constructor(user_account : number,email_id:String) {
       this.user_account = user_account;
      
       this.email_id = email_id;
   }
}
