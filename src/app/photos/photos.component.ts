import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private photoService:PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotos(2).then(response => {
      console.log('Fotos: ', response);
    });
  }

}
