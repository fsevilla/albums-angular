import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums:any[] =  [
    { title: 'Album 123 del servicio'},
    { title: 'Album 234'},
    { title: 'Album 345'}
  ];

  constructor(private httpClient:HttpClient) { }

  getAlbums() {
    return this.albums;
  }

  getAlbumsCallback(callback) {
    setTimeout(()=>{
      callback(this.albums);
    }, 2000);
  }

  getAlbumsPromise():Promise<any> {
    return new Promise((success, failure) => {
      setTimeout(()=>{
        success(this.albums);
      }, 2000);
    });
  }

  getAlbumsFromAPI():Promise<any> {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    return this.httpClient.get(url).toPromise();
  }
  
}
