import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterOneComponent } from './components/register-one/register-one.component';
import { RegisterOneService } from './services/register-one/register-one.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './http-interceptors';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RegisterOneService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
