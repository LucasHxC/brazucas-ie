import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../services/meeting.service';

@Component({
  selector: 'app-monthly-meeting',
  template: `
    <div *ngIf="totalAttendees < 200">
      <button (click)="rsvp()">RSVP for Meeting</button>
    </div>
    <div *ngIf="totalAttendees >= 200">
      <p>Limit of 200 attendees reached.</p>
    </div>
    <p>Total Attendees: {{ totalAttendees }}</p>
  `
})
export class MonthlyMeetingComponent implements OnInit {
  totalAttendees: number = 0;

  constructor(private meetingService: MeetingService) {}

  ngOnInit() {
    this.meetingService.getAttendeesCount().subscribe((data: any) => {
      this.totalAttendees = data.totalAttendees;
    });
  }

  rsvp() {
    this.meetingService.rsvpForMeeting().subscribe((data: any) => {
      this.totalAttendees = data.totalAttendees;
    }, (error) => {
      alert(error.error.message);
    });
  }
}
