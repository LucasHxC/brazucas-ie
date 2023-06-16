import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyMeetingsPage } from './monthly-meetings.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyMeetingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyMeetingsPageRoutingModule {}
