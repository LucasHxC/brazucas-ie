import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  @Input() type: 'info' | 'success' | 'error' = 'info';
  @Input() message: string = '';
  @Input() icon: string = 'information-circle-outline';
}
