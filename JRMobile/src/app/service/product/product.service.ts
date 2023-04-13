import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HexColorList, IconShape } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.server_url

  constructor(
    private http: HttpClient
  ) { }

  async getAllProducts(): Promise<any> {
    return this.http.get(`${this.url}product/setting/all/product`).toPromise();
  }

  async getHexColorList(): Promise<HexColorList[]> {
    return this.http.get<HexColorList[]>(`${this.url}product/setting/color/hex/all`).toPromise();
  }

  async getIconShape(): Promise<IconShape[]> {
    return this.http.get<IconShape[]>(`${this.url}product/setting/icon/shape`).toPromise();
  }
}
