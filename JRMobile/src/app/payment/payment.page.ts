import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  paymentAmount: string = '99.99';
  currency: string = 'USD';
  currencyIcon: string = '$';

  responseData: any = '';

  constructor(private payPal: PayPal) { }

  ngOnInit() {
  }

  payWithPaypal() {
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'ARSm_pDtCl5xX-XyFqKCTtHh52-XfgOPE9JEax2rffd_6AQzrlko-1Wqi8GeTGcaMcrOKhcLq31jV7T0'
    }).then(() => {
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          this.responseData = JSON.stringify(res, null, 1);
          // Successfully paid
          console.log('successfully paid')

        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      console.log('Paypal is not supported')
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }

}
