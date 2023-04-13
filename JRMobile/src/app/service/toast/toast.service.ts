import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController,
  ) { }

  async success(msg: string) {
    const toast: any = await this.toastController.create({
      header: msg,
      duration: 2000,
      position: 'top',
      color: 'dark',
    });
    toast.present();
  }

  async error(msg: string) {
    const toast: any = await this.toastController.create({
      header: msg,
      duration: 2000,
      position: 'top',
      color: 'danger',      
    });
    toast.present();
  }

}
