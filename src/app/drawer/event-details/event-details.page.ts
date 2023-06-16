import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-event-details',
  templateUrl: 'event-details.page.html',
  styleUrls: ['event-details.page.scss'],
})
export class EventDetailsPage {
  event: any;
  attendanceCount: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ionViewWillEnter() {
    const eventId = this.activatedRoute.snapshot.paramMap.get('eventId');
    // Fetch event details using the eventId from your data source
    this.event = {
      id: 1,
      title: 'Music Festival',
      date: new Date('2023-06-20'),
      time: '7:00 PM',
      venue: 'Concert Hall',
      address: '123 Main St, Dublin',
      imageUrl: 'assets/img/music-festival.jpg',
      description: 'Join us for a night of live music and entertainment at the Music Festival. Enjoy performances from various artists and bands from around the world.',
      mapLink: 'https://maps.google.com/maps?q=Concert%20Hall%2C%20123%20Main%20St%2C%20Dublin',
    };

    // Fetch attendance count for the event from your data source
    this.attendanceCount = 50; // Replace with the actual attendance count
  }

  async purchaseTicket() {
    // Logic for purchasing tickets
    const alert = await this.alertController.create({
      header: 'Purchase Tickets',
      message: 'Click the button below to purchase tickets.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Purchase',
          handler: () => {
            // Implement the logic to open the ticket seller company's website or payment gateway
            window.open('https://ticketseller.com/event/music-festival', '_blank');
            this.showToast('Tickets purchased successfully.');
          },
        },
      ],
    });

    await alert.present();
  }

  async saveEvent() {
    // Logic for saving the event
    // You can implement this based on your preferred method of saving events for the user
    // For example, you could use local storage or a backend service to store the saved events for the user

    // In this example, we'll use the ToastController to display a confirmation message
    this.showToast('Event saved successfully.');
  }

  async shareEvent() {
    // Logic for sharing the event
    // You can implement this based on your preferred method of sharing events on social media
    // For example, you could use Cordova Social Sharing plugin or custom sharing functionality

    // In this example, we'll use the ToastController to display a confirmation message
    this.showToast('Event shared successfully.');
  }

  async registerAttendance() {
    // Logic for registering attendance
    // You can implement this based on your preferred method of registering attendance for the user
    // For example, you could use a backend service to store the user's attendance status for the event

    // In this example, we'll simulate registering attendance and display a toast message with the attendance count
    this.attendanceCount++;
    this.showToast('Attendance registered successfully.');
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });

    toast.present();
  }
}
