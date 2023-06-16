import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MonthlyMeetingsPageRoutingModule } from './monthly-meetings-routing.module';
import { MonthlyMeetingsPage } from './monthly-meetings.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MonthlyMeetingsPageRoutingModule
  ],
  declarations: [MonthlyMeetingsPage]
})
export class MonthlyMeetingsPageModule {}
