import { ToastService } from './service/toast/toast.service';
import { LoginService } from './service/login/login.service';
import { LocalStorageService } from './service/local-storage/localstorage.service';
import { isPlatform, Platform, NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import OneSignal from 'onesignal-cordova-plugin';
import { currentUser } from './models/login.model';
import { Device } from '@capacitor/device';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private localStorage: LocalStorageService,
    private loginService: LoginService,
    private toastService: ToastService,
    private navCtrl: NavController,
    private screenOrientation: ScreenOrientation
  ) {
    this.initializeApp();
  }

  deviceUUID = "";

  async initializeApp() {
    await this.autoLogin();

    if (isPlatform('capacitor')) {
      this.platform.ready().then(async () => {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

        StatusBar.setOverlaysWebView({ overlay: false });
        StatusBar.setBackgroundColor({ color: '#ffffff' });
        StatusBar.setStyle({ style: Style.Light });

        const info = await Device.getId();
        this.deviceUUID = info.uuid
        await this.OneSignalInit();
        await this.getDeviceId();
      });
    }
  }

  async OneSignalInit(): Promise<void> {
    OneSignal.setLogLevel(6, 0);

    OneSignal.setAppId("140a0ae8-ba47-4d9a-8462-c7e5517aa347");
    OneSignal.setNotificationOpenedHandler((jsonData) => {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });

    OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
      console.log("User accepted notifications: " + accepted);
    });

    OneSignal.setExternalUserId(this.deviceUUID);
  }

  async autoLogin() {
    let loginInputData: any = await this.localStorage.getValue('loginInput');
    if (loginInputData) {
      try {
        const loginData = await this.loginService.login(loginInputData);
        if (loginData) {
          this.localStorage.setValue('access-token', loginData.accessToken);
          this.navCtrl.navigateRoot('');
        }
        let currentUser: currentUser = await this.loginService.getCurrentUser();
        this.localStorage.setValue('currentUser', currentUser);
      } catch (error: any) {
        this.localStorage.clearStore();
        this.toastService.error(error.error.message);
      }
    }
  }

  async getDeviceId() {
    if (this.deviceUUID != '') {
      await this.loginService.getDeviceDetail(this.deviceUUID);
    }
  }
}
