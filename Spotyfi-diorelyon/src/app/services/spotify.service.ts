import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient ) {
    console.log('spotyfi service listo');
   }

   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD1XTcxQroEbHONS-DzjQFh7ixFt6th922UrAzIIIoKKJb_qP1HfXg_MO1uwGWRpCyeNGdg8zttLyYoJts'
    });   
     return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }

   getArtista( termino: string ) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD1XTcxQroEbHONS-DzjQFh7ixFt6th922UrAzIIIoKKJb_qP1HfXg_MO1uwGWRpCyeNGdg8zttLyYoJts'
    });   
      return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
    // return this.http.get('https://api.spotify.com/v1/search?q=maluma&type=artist&limit=15', { headers });
   }


}
