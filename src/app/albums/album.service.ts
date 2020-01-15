import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpService:HttpService) { }

  getAlbums():Promise<any> {
    return this.httpService.get('albums').toPromise();
  }
  
}
