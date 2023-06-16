import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: Event[] = [
    // Sample data, replace with actual event data
    {
      id: '1',
      title: 'Event 1',
      date: '2023-06-10',
      time: '19:00',
      venue: 'Venue 1',
      address: 'Address 1',
      description: 'Event 1 description',
      ticketLink: 'https://example.com/event1-ticket',
      attendees: ['User 1', 'User 2', 'User 3'],
    },
    {
      id: '2',
      title: 'Event 2',
      date: '2023-06-15',
      time: '20:00',
      venue: 'Venue 2',
      address: 'Address 2',
      description: 'Event 2 description',
      ticketLink: 'https://example.com/event2-ticket',
      attendees: ['User 2', 'User 4'],
    },
  ];

  constructor() {}

  getEvents(): Observable<Event[]> {
    return of(this.events);
  }

  getEventById(id: string): Observable<Event> {
    const event = this.events.find((e) => e.id === id);
    return of(event);
  }
}
