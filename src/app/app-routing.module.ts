import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedsComponent } from './components/breeds/breeds.component';
import { VotesComponent } from './components/votes/votes.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { ImagesComponent } from './components/images/images.component';
import { ImagesSearchComponent } from './components/images-search/images-search.component';


const routes: Routes = [
  { path: 'breeds', component: BreedsComponent},
  { path: 'breeds/:q', component: BreedsComponent},
  { path: 'votes', component: VotesComponent},
  { path: 'favourites', component: FavouritesComponent},
  { path: 'images', component: ImagesComponent},
  { path: 'images/search', component: ImagesSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
