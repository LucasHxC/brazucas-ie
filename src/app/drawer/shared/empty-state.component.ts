import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent {
  @Input() message: string = '';
  @Input() actionText: string = '';
  @Output() actionClick: EventEmitter<void> = new EventEmitter<void>();
}
