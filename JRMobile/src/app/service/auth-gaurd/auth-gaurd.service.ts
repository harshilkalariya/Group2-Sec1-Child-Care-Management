import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { NavController } from "@ionic/angular";
import { LocalStorageService } from "../local-storage/localstorage.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private navCtrl: NavController
  ) { }

  async canActivate() {

    let firstTimeUser:any = await this.localStorageService.getValue('access-token');
    if (firstTimeUser) {
      return true;
    } else {
      this.navCtrl.navigateRoot('/landing-page');
      return false;
    }
  }
}
