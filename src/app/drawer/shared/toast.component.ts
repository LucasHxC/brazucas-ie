import { Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  template: '',
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() icon: string = '';

  constructor(private toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.message,
      duration: 3000,
      position: 'bottom',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            toast.dismiss();
          },
        },
      ],
    });

    await toast.present();
  }
}
