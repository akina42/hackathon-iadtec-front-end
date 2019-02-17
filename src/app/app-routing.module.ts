import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistersComponent } from './pages/registers/registers.component';
import { ReportsComponent } from './pages/reports/reports.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registers', component: RegistersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
