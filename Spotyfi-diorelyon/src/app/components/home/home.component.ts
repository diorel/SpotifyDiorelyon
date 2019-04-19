import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   nuevasCanciones: any[] = [];
   loadin: boolean; 

  constructor ( private spotify: SpotifyService ){


    this.loadin = true;

   // this.spotify.getNewReleases()
     //   .subscribe( ( data: any ) => {
       //   console.log(data.albums.items);
         // this.nuevasCanciones = data.albums.items;        
       // }); 

        this.spotify.getNewReleases()
        .subscribe( ( data: any ) => {
          this.nuevasCanciones = data; 
          this.loadin = false;      
        }); 

  }


}
