import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss'],
})
export class EventsPage {
  events: any[] = [
    {
      id: 1,
      title: 'Music Festival',
      date: new Date('2023-06-20'),
      imageUrl: 'assets/img/music-festival.jpg',
    },
    {
      id: 2,
      title: 'Art Exhibition',
      date: new Date('2023-07-05'),
      imageUrl: 'assets/img/art-exhibition.jpg',
    },
    // Add more event objects as needed
  ];

  constructor(private router: Router) {}

  openEventDetails(eventId: number) {
    this.router.navigate(['/event-details', eventId]);
  }
}
