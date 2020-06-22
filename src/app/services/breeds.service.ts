import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Breed } from '../interfaces/breed.interface';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(private http: HttpClient) { }

  getListTheCatBreeds() {
    return this.http.get<Breed[]>(environment.apiUrl + '/breeds');
  }

  getSearchForBreedByName() {

  }
}
