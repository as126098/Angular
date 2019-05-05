import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
// import { Customer } from './customer-req/customer-req';
import { Observable } from 'rxjs';
import { OTP } from './generate-otp/otp';
import { User } from './User';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import { Email } from './email';
import { ErrorMessage } from './update-email/ErrorMessage';
import { Login } from './login/Login';


const header = {
  headers: new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Accept, X-Requested-With, remember-me"
    })
};

@Injectable({
  providedIn: 'root'
})
export class OTPServiceService {
  dataFromService: any;
  dataFromService1: any;
  dataFromService3 : any;
  testq:String; 
  us:String;
  otp1:OTP;
  constructor(private http: HttpClient) { }


otpCheck(a:OTP): Observable<any>{
    const url : string = 'http://localhost:7999/checkOTP';
    // alert();
  //  this.testq = "{    \"result\":"+a+", \"uname\":\""+this.testq+ "\"  }";
    // alert(this.testq);
    // debugger;
    // return this.http.post<String>(url, "{    \"result\":"+a+", \"uname\":\""+this.testq+ "\"  }" ,header);
    // return this.http.post<String>(url, "{    \"result\":"+a+", \"uname\":\""+this.testq+",  \"account\":"+c+  "\"  }" ,header);
    return this.http.post<any>(url, a ,header);
} 

// otpCheck(otp:OTP): Observable<any>{
//   const url : string = 'http://localhost:7999/checkOTP';
//   // alert();
// //  this.testq = "{    \"result\":"+a+", \"uname\":\""+this.testq+ "\"  }";
//   // alert(this.testq);
//   // debugger;
//   return this.http.post<any>(url, otp ,header);
// }

getDetails(): Observable<string>{
  alert("inside service getdetails");
  const url : string = 'http://localhost:7999/generateOTP/';
  return this.http.get<string>(url,header) ;
}
getResendDetails(): Observable<User>{
   alert("inside service getdetails"+this.dataFromService);
   alert(" getdetails this.testq"+this.testq);
  
  const url : string = 'http://localhost:7999/generateOTPP/'+this.testq+"/"+this.dataFromService;
  return this.http.get<User>(url,header) ;
}
getDetails1(userAccount: any): Observable<User>{
  // const url : string = 'http://localhost:8787/getDetails/';
  return this.http.get<User>('http://localhost:7000/search/' + userAccount);
}

 getUserProfile(userAccount: any):Observable<User>{
  // const url : string = 'http://localhost:8787/getDetails/';
  return  this.http.get<User>('http://localhost:7000/search/' + userAccount);
}

getIT(userAccount: any){
  this.http.get<User>('http://localhost:7000/search/' + userAccount).pipe(map(data => {})).subscribe(result => {
    console.log(result);
  });

}

postEmail(a:Email): Observable<Email>{
  // const url : string = 'http://localhost:8090/send';
  console.log("Inside post Email Methos");
  return this.http.post<Email>('http://localhost:7000/send',a);
}

getStatus(status:Email): Observable<ErrorMessage>{
  // const url : string = 'http://localhost:8090/send';
  console.log("Inside getstatus Email Methos");
  return this.http.post<ErrorMessage>('http://localhost:7001/mongo/getStatus',status);
}

checkPassword(a:Login): Observable<string>{
  const url : string = 'http://localhost:7000/checkPassword';
  // alert();
//  this.testq = "{    \"result\":"+a+", \"uname\":\""+this.testq+ "\"  }";
  // alert(this.testq);
  // debugger;
  // return this.http.post<String>(url, "{    \"result\":"+a+", \"uname\":\""+this.testq+ "\"  }" ,header);
  // return this.http.post<String>(url, "{    \"result\":"+a+", \"uname\":\""+this.testq+",  \"account\":"+c+  "\"  }" ,header);
  
   
  return this.http.post<string>(url, a, header);
}
  
}
