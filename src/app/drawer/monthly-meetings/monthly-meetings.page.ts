import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-monthly-meetings',
  templateUrl: 'monthly-meetings.page.html',
  styleUrls: ['monthly-meetings.page.scss'],
})
export class MonthlyMeetingsPage {
  meetings: any[] = [];

  constructor(private toastController: ToastController) {}

  ionViewWillEnter() {
    // Fetch monthly meetings from your data source
    this.meetings = [
      {
        title: 'Monthly Networking Event',
        date: new Date('2023-06-15'),
        topic: 'Networking and Building Connections',
        venue: 'ABC Conference Center',
      },
      {
        title: 'Guest Speaker Series',
        date: new Date('2023-06-20'),
        topic: 'Emerging Technologies in Software Development',
        venue: 'XYZ Auditorium',
      },
      // Add more meetings here...
    ];
  }

  async registerAttendance(meeting: any) {
    // Logic to register attendance
    // You can replace the following code with your actual implementation
    
    // Simulate registration and show a toast message
    const toast = await this.toastController.create({
      message: `Registered attendance for "${meeting.title}"`,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
