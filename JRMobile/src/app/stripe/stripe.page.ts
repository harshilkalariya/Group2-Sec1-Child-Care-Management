import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx/index';
import { FileOpener } from '@ionic-native/file-opener/ngx/index';

import { PaymentSheetEventsEnum, Stripe } from '@capacitor-community/stripe'
import { first, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.page.html',
  styleUrls: ['./stripe.page.scss'],
})
export class StripePage implements OnInit {
  paymentInput: any;
  data: any;

  responseData: any = '';

  letterObj = {
    from: 'This is testing of pdf generation',
    to: 'learn to import image',
    text: 'for JR logo.'
  }

  pdfObj = null;



  constructor(private http: HttpClient, private fb: UntypedFormBuilder, private platform: Platform, private file: File, private fileOpener: FileOpener) {
    Stripe.initialize({
      publishableKey: 'pk_test_51MfV7mHVw3NF151dqHPNjFCUnrSMpdQHkztbwn7SK6fiTmso1ZbKHKyfhfajadXHJ5zGXeEmYJv3k5eC6GEMYcKc00DfPSqDrX',
    });

    this.paymentInput = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
  }

  get log() { return this.paymentInput.controls; };

  ngOnInit() {
  }

  httpPost(body) {
    return this.http.post<any>(environment.api + 'payment-sheet', body).pipe(first());
  }

  

  async paymentSheet() {
    console.log('method called')
    if (this.paymentInput.valid) {
      this.data = {
        name: this.paymentInput.value.name,
        email: this.paymentInput.value.email.trim(),
        amount: 1000,
        currency: 'CAD'
      }
      console.log(this.data);
      try {
        Stripe.addListener(PaymentSheetEventsEnum.Completed, () => {
          console.log('PaymentSheetEventsEnum.Completed');
        });

        const data$ = this.httpPost(this.data);

        const { paymentIntent, ephemeralKey, customer } = await lastValueFrom(data$);

        await Stripe.createPaymentSheet({
          paymentIntentClientSecret: paymentIntent,
          customerId: customer,
          customerEphemeralKeySecret: ephemeralKey,
          merchantDisplayName: 'JR Daycare'
        })

        const result = await Stripe.presentPaymentSheet();
        console.log('result: ', result);

        if (result && result.paymentResult === PaymentSheetEventsEnum.Completed) {
          this.createPdf(this.data);
          this.responseData = 'success';
        };
      }
      catch (e) {
        console.log(e);
      }
    }
    else {
      console.log('error : ')
    }
  }

  createPdf(infodata) {
    var docDefinition = {
      content: [
        { text: 'Invoice - JR Daycare', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'Name', style: 'subheader' },
        { text: infodata.name },

        { text: 'Email', style: 'subheader' },
        { text: infodata.email },

        { text: 'Amount', style: 'subheader' },
        { text: '$10.00' },
      ]
    }

    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

  downloadPdf() {
    if (this.platform.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });

        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'file.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'file.pdf', 'application/pdf');
        })
      });
    }
    else {
      this.pdfObj.download();
    }
  }


}
