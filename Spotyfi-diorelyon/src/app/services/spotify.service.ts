import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient ) {
    console.log('spotyfi service listo');
   }

   getQuety( query: string ){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDBW8EkajtEMcdZfNux_qNk6hu4kIphMtUJWqMoLf9ScwleW0-ODrgdNf1hfpYGU13mGiQkKZW3_xeBxoQ'
    });  

    return this.http.get(url,{ headers });

   }


   getNewReleases() {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQA7ZJDIX6uZAn03z-HXljqU2OKYVJERWcWgM_XDyIHkz1uPvGp126dXPgVo6dVTtmUdaKnulI4se_RxIeo'
    // });   
     return this.getQuety('browse/new-releases')
                .pipe( map (data => data['albums'].items));


    //  this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //             .pipe( map( data => {
    //                return data['albums'].items;
    //             }));
   }

   getArtista( termino: string ) {



    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQA26BqIzD1gIVlVBcQ7VL9Qs41v0M0IoK4WxFaj2EAnbpBV8m6WSY1Vj1XVdsZtaFBoea7PznRzKzRXtxA'
    // });   

      return this.getQuety(`search?q=${ termino }&type=artist&limit=15`)
                 .pipe( map( data => data['artists'].items));

      // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
    // return this.http.get('https://api.spotify.com/v1/search?q=maluma&type=artist&limit=15', { headers });
   }


}


