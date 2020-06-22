import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private http: HttpClient) { }

  getListTheCatBreeds() {
    return this.http.get(environment.apiUrl + '/breeds');
  }

  getSearchForBreedByName() {

  }
}
