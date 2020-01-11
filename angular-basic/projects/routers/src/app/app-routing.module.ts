import { ProfileGuard } from './profile.guard';
import { ChartComponent } from './analytics/chart/chart.component';
import { FpComponent } from './login/fp/fp.component';
import { ProfleComponent } from './profile/profle/profle.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics/analytics.component';

const analyticsRoutes: Routes = [
  { path: 'line', component: ChartComponent },
  { path: 'pie', component: ChartComponent },
  { path: 'bar', component: ChartComponent }
]

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'analytics', component: AnalyticsComponent, children: analyticsRoutes },
  { path: 'profile/:us', component: ProfleComponent, canActivate: [ProfileGuard] },
  { path: 'fp/:us', component: FpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
