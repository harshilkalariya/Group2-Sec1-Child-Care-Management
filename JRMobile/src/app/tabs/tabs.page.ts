import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, ViewChild, NgZone } from '@angular/core';
import { IonTabs, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild(IonTabs) tabs: IonTabs;
  selected = '';
  tabSubscription: Subscription;

  constructor(
    private router: Router,
    private platform: Platform,
    private zone: NgZone
  ) { }

  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }

  async ionViewWillEnter() {
    this.tabSubscription = this.platform.backButton.subscribe(async e => {
      let url = this.router.url;

      if (url === '/tabs/home') {
        navigator["app"].exitApp();
      }

      if (url === '/tabs/product' || url === '/tabs/inquiry' || url === '/tabs/profile') {
        this.zone.run(() => {
          this.router.navigate(['/tabs/home']);
        });
      }
    });
  }

}
