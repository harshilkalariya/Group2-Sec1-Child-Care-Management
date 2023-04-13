import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InquiryInputData, InquiryResponse } from 'src/app/models/inquiry.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  url = environment.server_url

  constructor(private http: HttpClient) { }

  async getAllState(): Promise<any> {
    return this.http.get(`${this.url}location/state`).toPromise();
  }

  async getDistrictListForState(stateId:number): Promise<any> {
    return this.http.get(`${this.url}location/district?stateId=${stateId}`).toPromise();
  } 

  async getCityListForDistrict(DistrictId:number): Promise<any> {
    return this.http.get(`${this.url}location/city?districtId=${DistrictId}`).toPromise();
  }
  
  async generateInquiry(inquiryData: InquiryInputData): Promise<any> {
    return this.http.post<InquiryInputData>(`${this.url}enquiry/add`, inquiryData).toPromise();
  }

  async getAllInquiryList(pageNumber: number, searchText: string): Promise<any> {
    return this.http.get(`${this.url}enquiry/ongoing?pageNo=${pageNumber}&search=${searchText}`).toPromise();
  }

  async getComplitedInquiryList(pageNumber: number, searchText: string): Promise<any> {
    return this.http.get(`${this.url}enquiry/finished?pageNo=${pageNumber}&search=${searchText}`).toPromise();
  }

  async getInquiryDetailByInquiryId(inquiryId: number): Promise<any> {
    return this.http.get(`${this.url}enquiry/${inquiryId}`).toPromise();
  }

  async changeInquiryStatus(response: InquiryResponse): Promise<any> {
    return this.http.post<InquiryResponse>(`${this.url}enquiry/status`, response).toPromise();
  }  
}
