import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../core/services/contentful.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  events: any[] = [];

  constructor(private contentfulService: ContentfulService, private navCtrl: NavController) { }

  ngOnInit() {
    this.loadEvents();
  }

  private async loadEvents() {
    const eventsCollection = await this.contentfulService.getEvents();
    this.events = eventsCollection.items;
  }

  openEvent(event: any) {
    this.navCtrl.navigateForward('/event-details', {
      queryParams: { event: JSON.stringify(event) }
    });
  }
  

}
