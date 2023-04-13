import { LoginService } from './../service/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { currentUser } from '../models/login.model';
import { LocalStorageService } from '../service/local-storage/localstorage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentUser: currentUser;

  constructor(
    private navCtrl: NavController,
    private localStorage: LocalStorageService,
    private router: Router,
    private loginService: LoginService,
  ) { }

  async ngOnInit() {
    this.currentUser = await this.localStorage.getValue('currentUser');
  }

  async logout() {
    await this.loginService.getDeviceDetail(null);
    this.localStorage.clearStore();
    this.navCtrl.navigateRoot('login');
  }

  goToFeedBackPage() {
    this.router.navigate(['/tabs/profile/feedback']);
  }
}
