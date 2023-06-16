import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: 'event-item.component.html',
  styleUrls: ['event-item.component.scss'],
})
export class EventItemComponent {
  @Input() event: any;
}
