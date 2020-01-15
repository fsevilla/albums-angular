import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AlbumService } from './album.service';
import { AlbumCopyService } from './album-copy.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, AfterViewInit {

  title:string = "Albums";

  albumTitle:string;

  albums:any[] = [];

  filteredAlbums:any[] = [];

  dataLoaded:boolean = false;

  constructor(private albumService:AlbumService, private albumService2:AlbumCopyService) { }

  ngOnInit() {
    // Sync
    // this.albums = this.albumService.getAlbums();

    // Callback
    // this.albumService.getAlbumsCallback((data)=>{
    //   this.albums = data;
    //   this.filteredAlbums = this.albums.slice();
    // })

    // Promise
    this.albumService.getAlbums().then((data) => {
      this.albums = data;
      this.filteredAlbums = this.albums.slice();
      this.dataLoaded = true;
    }).catch(err => {
      console.error('Hubo un error...', err);
    });

    // this.albumService2.getAlbums().then((response) => {
    //   this.albums = response;
    //   this.filteredAlbums = this.albums.slice();
    //   this.dataLoaded = true;
    // });
  }

  ngAfterViewInit() {
    console.log('html dibujado');
  }

  search() {
    if(this.albumTitle.length < 3) return;
    this.filteredAlbums = this.albums.filter((album) => {
      return album.title.includes(this.albumTitle);
    });
  }

  search2(e) {
    const value = e.target.value;
    if(value.length < 3) return;
    this.filteredAlbums = this.albums.filter((album) => {
      return album.title.includes(value);
    });
  }

}
