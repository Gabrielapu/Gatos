import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vote } from '../interfaces/vote.interface';
import { environment } from 'src/environments/environment';
import { Cat } from '../interfaces/cat.interface';
import { CatModel } from '../models/cat.model';

@Injectable({
  providedIn: 'root',
})
export class VotesService {
  constructor(private http: HttpClient) {}

  getYourVotes() {
    const headers = new HttpHeaders().set('x-api-key', environment.apiKey);
    return this.http.get<Vote[]>(environment.apiUrl + '/votes', { headers });
  }

  getCatRandom() {
    return this.http.get<Cat[]>(environment.apiUrl + '/images/search');
  }

  createVote(cat: CatModel) {
    const headers = new HttpHeaders().set('x-api-key', environment.apiKey);
    return this.http.post(environment.apiUrl + '/votes', cat, { headers });
  }

  getSpecificVote() {}

  deleteVote(id: any) {
    const headers = new HttpHeaders().set('x-api-key', environment.apiKey);
    return this.http.delete(environment.apiUrl + `/votes/${id}`, { headers });
  }
}
