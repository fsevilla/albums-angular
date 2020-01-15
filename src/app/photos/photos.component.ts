import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PhotoService } from './photo.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos:any[] = [];

  dataLoaded:boolean = false;

  private albumId:number;

  constructor(
    private photoService:PhotoService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.albumId = parseInt(params.albumId, 10);
      this.getPhotosObservable();
    });
  }

  getPhotos(albumId) {
    this.photoService.getPhotos(albumId)
      .then(response => {
        this.photos = response;
        this.dataLoaded = true;
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  getPhotosObservable() {
    this.photoService.getPhotosObservable(this.albumId).subscribe(response => {
      this.photos = response;
      this.dataLoaded = true;
    }, err => {
      console.log('Error', err);
    });
  }

  goNext() {
    this.router.navigate(['../'+this.getNextId()], {
      relativeTo: this.activatedRoute
    })
  }

  getNextId() {
    return this.albumId + 1;
  }

}
