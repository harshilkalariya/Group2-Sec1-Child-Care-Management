import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  product = new BehaviorSubject<any>({})
  inquiry = new BehaviorSubject<any>({})

  constructor() { }

  sendProduct(prod: any) {
    this.product.next(prod);
  }

  getProduct(): Observable<any> {
    return this.product.asObservable();
  }

  sendInquiry(inq:any){
    this.inquiry.next(inq)
  }

  getInquiry(): Observable<any> {
    return this.inquiry.asObservable();
  }
}
