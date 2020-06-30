import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AppRoutingModule } from './app-routing.module';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreedsComponent } from './components/breeds/breeds.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VotesComponent } from './components/votes/votes.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { ImagesComponent } from './components/images/images.component';
import { ImagesSearchComponent } from './components/images-search/images-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreedsComponent,
    VotesComponent,
    FavouritesComponent,
    ImagesComponent,
    ImagesSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    ProgressbarModule.forRoot(),
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
