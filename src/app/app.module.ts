import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CustomMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GenerateOTPComponent } from './generate-otp/generate-otp.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReOTPComponent } from './re-otp/re-otp.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateEmailComponent, DialogOverviewExampleDialog1 } from './update-email/update-email.component';
import { FooterComponent } from './footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogOverviewExampleDialog} from './generate-otp/generate-otp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenerateOTPComponent,
    LoginComponent,
    ReOTPComponent,
    UserProfileComponent,
    UpdateEmailComponent,
    FooterComponent,
    DialogOverviewExampleDialog,
    DialogOverviewExampleDialog1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents: [DialogOverviewExampleDialog,DialogOverviewExampleDialog1],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
