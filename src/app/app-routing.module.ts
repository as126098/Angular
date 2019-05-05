import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { LoginComponent } from './login/login.component';
import { GenerateOTPComponent } from './generate-otp/generate-otp.component';
import { ReOTPComponent } from './re-otp/re-otp.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateEmailComponent } from './update-email/update-email.component';

const routes: Routes = [
{ path: 'login' , component: LoginComponent },
// { path: '' , redirectTo:'/landing' , pathMatch: 'full'},
{path : 'user/:abc', component : UserProfileComponent},
{path : 'updateEmail', component : UpdateEmailComponent},
{path : 'otpGenerate', component : GenerateOTPComponent},
{path : 'generateOTP', component : GenerateOTPComponent},


{ path: '**' , redirectTo : '/login' , pathMatch:  'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
