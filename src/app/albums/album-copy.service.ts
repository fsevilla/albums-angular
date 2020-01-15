import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumCopyService {

  albums:any[] =  [
    { title: 'Album 123 del servicio'},
    { title: 'Album 234'},
    { title: 'Album 345'}
  ];

  constructor() { }

  getAlbums():Promise<any> {
    return new Promise((success, failure) => {
      setTimeout(() => {
        success(this.albums);
      }, 3000);
    });
  }
}
