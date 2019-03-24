import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
 import { SearchComponent } from './Components/search/search.component';
import { ArtistaComponent } from './Components/artista/artista.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';


// Importar rutas
import { ROUTES } from './app.routes';
// services
import { SpotifyService } from './services/spotify.service';
// import { SpotityService } from './services/spotity.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true } )
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
