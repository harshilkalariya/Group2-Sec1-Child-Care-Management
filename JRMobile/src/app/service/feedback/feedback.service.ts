import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackData } from 'src/app/models/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  url = environment.server_url

  constructor(
    private http: HttpClient
  ) { }

  async addFeedback(feedback: FeedbackData): Promise<any> {
    return this.http.post(`${this.url}feedback/add`, feedback).toPromise();
  }
}
