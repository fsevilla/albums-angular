import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from './photo.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos:any[] = [];

  dataLoaded:boolean = false;

  constructor(private photoService:PhotoService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.getPhotos(data.albumId);
    });
  }

  ngOnInit() {
    
  }

  getPhotos(albumId) {
    this.photoService.getPhotos(albumId).then(response => {
      console.log('Fotos: ', response);
      this.photos = response;
      this.dataLoaded = true;
    });
  }

}
