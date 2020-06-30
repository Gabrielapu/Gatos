import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FavouriteModel } from '../models/favourite.model';
import { Favourite } from '../interfaces/favourite.interface';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(private http: HttpClient) {}

  saveAsFavourite(favourite: FavouriteModel) {
    const headers = new HttpHeaders().set('x-api-key', environment.apiKey);
    return this.http.post(environment.apiUrl + '/favourites', favourite, {
      headers,
    });
  }

  getFavourites() {
    const headers = new HttpHeaders().set('x-api-key', environment.apiKey);
    return this.http.get<Favourite[]>(environment.apiUrl + '/favourites', {
      headers,
    });
  }
}
