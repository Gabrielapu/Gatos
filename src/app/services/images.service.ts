import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Image } from '../interfaces/image.interface';
import { Categorie } from '../interfaces/categorie.interface';
import { ImageSearch } from '../interfaces/imageSearch.interface';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  uploadImage(file: File) {
    const formData = new FormData();
    formData.set('file', file);

    const headers = new HttpHeaders()
      .set('x-api-key', environment.apiKey);
    return this.http.post(environment.apiUrl + '/images/upload', formData, {headers, reportProgress: true, observe: 'events'});
  }

  getUploadedImages(page: string, limit: string) {
    
    let params = new HttpParams();

    params = params.set('page', page);
    params = params.set('limit', limit);
    
    const headers = new HttpHeaders().set('x-api-key', environment.apiKey);
    return this.http.get<Image[]>(environment.apiUrl + '/images', { headers, params });
  }

  getAllImages(page: string, limit: string, id?: number) {

    let params = new HttpParams();

    params = params.set('page', page);
    params = params.set('limit', limit);
    if (id) params = params.set('category_ids', id.toString());

    return this.http.get<ImageSearch[]>(environment.apiUrl + '/images/search', {params});
  }

  getCategories() {
    const headers = new HttpHeaders().set('x-api-key', environment.apiKey);
    return this.http.get<Categorie[]>(environment.apiUrl + '/categories',{headers});
  }
}
