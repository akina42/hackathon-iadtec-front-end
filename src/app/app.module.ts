import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterOneComponent } from './components/register-one/register-one.component';
import { RegisterOneService } from './services/register-one/register-one.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors';
import { AppRoutingModule } from './/app-routing.module';
import { RegistersComponent } from './pages/registers/registers.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ReportsService } from './services/reports/reports.service';
import { CountryComponent } from './pages/country/country.component';
import { RegisterCountryComponent } from './components/register-country/register-country.component';
import { FormCountryComponent } from './components/form-country/form-country.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterOneComponent,
    RegistersComponent,
    ReportsComponent,
    CountryComponent,
    RegisterCountryComponent,
    FormCountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RegisterOneService,
    ReportsService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
