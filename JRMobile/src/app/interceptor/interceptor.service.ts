import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from as observableFrom, throwError } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError, switchMap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../service/local-storage/localstorage.service';

const requestToExclude = [
  `${environment.server_url}/auth/login`,
  `${environment.server_url}/users`,
  `${environment.server_url}/user-otps/resend`,
  `${environment.server_url}/user-otps/verify`,
  `${environment.server_url}/users/set-access-code`,
  `${environment.server_url}/team-user/send_team_code`,
  `${environment.server_url}/team-user/join_team`,
  `https://www.googleapis.com/youtube/v3/search`,
  `https://www.googleapis.com/youtube/v3/playlistItems`
];


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private navCtrl: NavController,
    private localStorageService: LocalStorageService,
    private activatedRoute: ActivatedRoute
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return observableFrom(this._getToken()).pipe(
      switchMap(token => {
        req = req.clone({
          headers: new HttpHeaders({
            Authorization: `Bearer ${token}`,
          })
        });
        if (requestToExclude.indexOf(req.url) === -1) {
          req = req.clone({
            headers: new HttpHeaders({
              Authorization: `Bearer ${token}`
            })
          });
        }
        return next.handle(req).pipe(
          map(response => {
            if (response instanceof HttpResponse) {
            }
            return response;
          }),
          catchError(err => {
            switch (err.status) {
              case 0:
                // try {
                //   this.sharedService._loadingStop();
                // } catch (error) { }
                // if (this.alertCtrl) {
                //   this.presentAlert();
                // }
                break;

              case 200:
                break;
              case 401:
                if (this.activatedRoute.snapshot['_routerState'].url !== '/pre-dashboard') {
                  this.navCtrl.navigateRoot("/login");
                }
                break;
              case 500:
                break;
              case 400:
                // this.toast(err.error.message);
                break;
            }
            return throwError(err);
          })
        );
      })
    );
  }

  async _getToken() {
    return await this.localStorageService.getValue("access-token");

  }



}
