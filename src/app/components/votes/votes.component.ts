import { Component, OnInit } from '@angular/core';
import { VotesService } from '../../services/votes.service';
import { Vote } from '../../interfaces/vote.interface';
import { Cat } from '../../interfaces/cat.interface';
import { CatModel } from '../../models/cat.model';
import { FavouritesService } from '../../services/favourites.service';
import { FavouriteModel } from 'src/app/models/favourite.model';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
})
export class VotesComponent implements OnInit {
  votes: Vote[];
  cat: Cat;

  constructor(
    private votesService: VotesService,
    private favouritesService: FavouritesService
  ) {}

  ngOnInit(): void {
    this.getRandom();
    this.votesService.getYourVotes().subscribe((r) => {
      this.votes = r;
    });
  }

  getRandom() {
    this.votesService.getCatRandom().subscribe((r) => (this.cat = r[0]));
  }

  vote(type: string) {
    if (type === 'like') {
      const catModel = new CatModel();
      catModel.image_id = this.cat.id;
      catModel.value = true;

      this.votesService.createVote(catModel).subscribe(() => {
        this.getRandom();
      });
    } else {
      this.getRandom();
    }
  }

  favourite() {
    const favourite = new FavouriteModel();
    favourite.image_id = this.cat.id;
    favourite.sub_id = Math.round(Math.random() * 100000).toString();
    this.favouritesService.saveAsFavourite(favourite).subscribe();
  }
}
