import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  baseUrl = 'http://localhost:3000';  // Replace with your backend API's URL

  constructor(private http: HttpClient) {}

  rsvpForMeeting() {
    return this.http.post(`${this.baseUrl}/rsvp`, {});
  }

  getAttendeesCount() {
    return this.http.get(`${this.baseUrl}/attendeesCount`);
  }
}
