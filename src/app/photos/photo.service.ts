import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient:HttpClient) { }

  getPhotos(albumId:number):Promise<any> {
    const url = 'https://jsonplaceholder.typicode.com/photos?albumId='+albumId;
    return this.httpClient.get(url).toPromise();
  }

  getPhotosObservable(albumId:number):Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/photos?albumId='+albumId;
    return this.httpClient.get(url);
  }
  
}
