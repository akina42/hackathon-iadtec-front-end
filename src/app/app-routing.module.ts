import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistersComponent } from './pages/registers/registers.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CountryComponent } from './pages/country/country.component';
import { FormCountryComponent } from './components/form-country/form-country.component';
import { StatesComponent } from './pages/states/states.component';
import { FormStateComponent } from './components/form-state/form-state.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { FormClientComponent } from './components/form-client/form-client.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'registers', component: RegistersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'countries', component: CountryComponent },
  { path: 'countries/new', component: FormCountryComponent },
  { path: 'states', component: StatesComponent },
  { path: 'states/new', component: FormStateComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/new', component: FormClientComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
