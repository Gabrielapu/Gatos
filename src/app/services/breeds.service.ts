import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Breed } from '../interfaces/breed.interface';

@Injectable({
  providedIn: 'root',
})
export class BreedsService {
  constructor(private http: HttpClient) {}

  getListTheCatBreeds(page: string, limit: string) {
    let params = new HttpParams();

    params = params.set('page', page);
    params = params.set('limit', limit);

    return this.http.get<Breed[]>(environment.apiUrl + '/breeds', { params });
  }

  getSearchForBreedByName(query: string) {
    let params = new HttpParams();

    params = params.set('q',query);

    return this.http.get<Breed[]>(environment.apiUrl + '/breeds/search', {params});
  }
}
