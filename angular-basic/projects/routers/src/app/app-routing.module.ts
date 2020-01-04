import { ProfleComponent } from './profile/profle/profle.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics/analytics.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'profile', component: ProfleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
