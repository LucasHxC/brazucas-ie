import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  @Input() title: string = '';
  @Input() message: string = '';

  constructor(private modalController: ModalController) {}

  confirm() {
    // Emit confirmation event or perform desired action
    this.modalController.dismiss({ confirmed: true });
  }

  cancel() {
    // Emit cancellation event or perform desired action
    this.modalController.dismiss({ confirmed: false });
  }
}
