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
      'Authorization': 'Bearer BQAd_1Dq1slgaEgjqllaEDOKYWwmgF_vKT7hOFZYoYwiw31j3psr7bkQ9VPbkJkNI_R8hO-oHl-51tNFkg8'
    }); 

  
     return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

       //  this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //  .subscribe( data => {
    //    console.log(data);
    //  });


   }


}
