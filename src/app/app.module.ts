import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TripsComponent } from './trips/trips.component';
import { ProfileComponent } from './profile/profile.component';
import { NavBarModule } from './nav-bar/nav-bar-module';

import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './_service/app.service';
import { AuthService } from './_service/authservices/auth.service';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { VerifyComponent } from './auth/verify/verify.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    // NgbModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    NavBarModule, BrowserAnimationsModule
  ],
  exports: [
    AppService,
    AuthService,
    TripsComponent,
    ProfileComponent,
  ],
  providers: [
    AppService,
    AuthService,
    StatusBar,
    SplashScreen,
    NavBarModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
