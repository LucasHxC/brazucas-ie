import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-meeting-item',
  templateUrl: 'monthly-meeting-item.component.html',
  styleUrls: ['monthly-meeting-item.component.scss'],
})
export class MonthlyMeetingItemComponent {
  @Input() monthlyMeeting: any;

  rsvp() {
    // Logic for RSVP functionality
  }
}
