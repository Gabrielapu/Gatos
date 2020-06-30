import { Component, OnInit } from '@angular/core';
import { Favourite } from '../../interfaces/favourite.interface';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favourites: Favourite[];

  constructor(private favouritesService: FavouritesService) {}

  ngOnInit(): void {
    this.favouritesService.getFavourites().subscribe((r) => {
      this.favourites = r;
    });
  }
}
