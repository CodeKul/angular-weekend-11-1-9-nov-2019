import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [AnalyticsComponent, ChartComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AnalyticsModule { }
