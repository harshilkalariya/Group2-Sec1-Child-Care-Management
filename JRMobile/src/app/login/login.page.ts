import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { currentUser, ResetPassword, VerifyOTP } from '../models/login.model';
import { LocalStorageService } from '../service/local-storage/localstorage.service';
import { LoginService } from '../service/login/login.service';
import { ToastService } from '../service/toast/toast.service';
import OneSignal from 'onesignal-cordova-plugin';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginPage: boolean = true;
  forgotPasswordPage: boolean = false;

  isOTPReceived: boolean = false;
  isOTPValidated: boolean = false;
  resendOTP: boolean = false;

  loginInput: any;
  loginSubscription: Subscription;

  resetUserName: any = new UntypedFormControl('', [Validators.required]);
  resetOTP: any = new UntypedFormControl('', [Validators.required]);
  newPassword: any = new UntypedFormControl('', [Validators.required, Validators.minLength(6)]);
  dataForVerifyOTP: VerifyOTP;
  dataForNewPassword: ResetPassword;

  otpTimeLeft: number;
  otpInterval: any;
  deviceUUID = "";

  constructor(
    private loginService: LoginService,
    private localStorage: LocalStorageService,
    private navCtrl: NavController,
    private platform: Platform,
    private fb: UntypedFormBuilder,
    private toastService: ToastService,
    private router: Router

  ) {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    this.loginInput = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  get log() { return this.loginInput.controls; };

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.loginSubscription = this.platform.backButton.subscribe(async e => {
      if (this.router.url === '/login') {
        this.localStorage.removeValue('access-token');
        navigator["app"].exitApp();
      }
    });
  }

  forgotPassPageShow() {
    this.loginPage = false;
    this.forgotPasswordPage = true;
  }

  loginPageShow() {
    this.loginPage = true;
    this.forgotPasswordPage = false;
  }

  async login() {
    if (this.loginInput.valid) {
      let loginInputData: any = {
        password: this.loginInput.value.password,
        username: this.loginInput.value.username.trim()
      }
      try {
        const loginData = await this.loginService.login(loginInputData);
        if (loginData) {
          console.log(loginData);
          this.localStorage.setValue('access-token', loginData.accessToken);
          let currentUser: currentUser = await this.loginService.getCurrentUser();
          this.localStorage.setValue('currentUser', currentUser);
          this.localStorage.setValue('loginInput', loginInputData);
          // const info = await Device.getId();
          // this.deviceUUID = info.uuid
          // await this.OneSignalInit();
          // await this.getDeviceId();
          this.navCtrl.navigateRoot('');
        }
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

  async generateOTP() {
    if (this.resetUserName.valid) {
      this.resendOTP = false;
      clearInterval(this.otpInterval);
      try {
        let rsp = await this.loginService.generateOTP(this.resetUserName.value.trim());
        console.log('One Time Password is - ', rsp.otp);
        this.toastService.success('OTP sent to your Email address');

        this.isOTPReceived = true;
        setTimeout(() => {
          this.resendOTP = true;
        }, 600000);
        this.otpExpireTimer();

      } catch (error: any) {
        this.toastService.error(error.error.message);
      }
    }
  }

  async submitOTP() {
    if (this.resetUserName.valid && this.resetOTP.valid) {
      this.dataForVerifyOTP = {
        username: this.resetUserName.value,
        otp: this.resetOTP.value
      }
      try {
        await this.loginService.verifyOTP(this.dataForVerifyOTP);
        this.isOTPValidated = true;
      } catch (error: any) {
        this.toastService.error(error.error.message);
      }
    }
  }

  async resetPassword() {
    if (this.resetUserName.valid && this.resetOTP.valid && this.newPassword.valid) {
      this.dataForNewPassword = {
        username: this.resetUserName.value,
        otp: this.resetOTP.value,
        password: this.newPassword.value
      }
      try {
        await this.loginService.resetPassword(this.dataForNewPassword);
        this.isOTPReceived = false;
        this.isOTPValidated = false;
        this.forgotPasswordPage = false;
        this.resendOTP = false;
        this.loginPage = true;
        this.resetUserName.reset();
        this.resetOTP.reset();
        this.newPassword.reset();
        this.toastService.success('Password changed successfully');
      } catch (error: any) {
        this.toastService.error(error.error.message);
      }
    }
  }

  otpExpireTimer() {
    this.otpTimeLeft = 600;
    this.otpInterval = setInterval(() => {
      if (this.otpTimeLeft > 0) {
        this.otpTimeLeft--;
      } else {
        clearInterval;
      }
    }, 1000)
  }

}
