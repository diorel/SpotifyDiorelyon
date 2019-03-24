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
      'Authorization': 'Bearer BQCyqMpKJgp_-MPz-c6WLewyub3GRH3EsNXokm0DlgIfgpQYEw4DX6UR2eeBKRjJWO3gdRZccGzvp8oa-14'
    }); 

     this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
     .subscribe( data => {
       console.log(data);
     });

   }


}
