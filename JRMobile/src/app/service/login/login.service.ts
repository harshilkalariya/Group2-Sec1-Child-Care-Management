import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = environment.server_url

  async login(loginData: any): Promise<any> {
    return this.http.post(`${this.url}auth/_m/signin`, loginData).toPromise();
  }

  async getCurrentUser(): Promise<any> {
    return this.http.get(`${this.url}auth/current`).toPromise();
  }

  async generateOTP(username:string): Promise<any> {
    return this.http.get(`${this.url}auth/reset?username=${username}`).toPromise();
  }

  async verifyOTP(otpData: any): Promise<any> {
    return this.http.post(`${this.url}auth/otp/verify`, otpData).toPromise();
  }

  async resetPassword(resetData: any): Promise<any> {
    return this.http.post(`${this.url}auth/reset/password`, resetData).toPromise();
  }

  async getDeviceDetail(uuid:string): Promise<any> {
    return this.http.get(`${this.url}user/add/device_id/${uuid}`).toPromise();
  }

}
