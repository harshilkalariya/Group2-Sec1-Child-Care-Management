import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx/index';
import { FileOpener } from '@ionic-native/file-opener/ngx/index';
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  
  constructor(private navController: NavController, private platform: Platform, private file: File, private fileOpener: FileOpener) {

  }

  ngOnInit() {
  }

  goToLogin() {
    this.navController.navigateRoot('login');
  }

  goToPDFDemo(){
    this.navController.navigateRoot('invoice');
  }

  goToPayment(){
    this.navController.navigateRoot('stripe');
  }
  
}
