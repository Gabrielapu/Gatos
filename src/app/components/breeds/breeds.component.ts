import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../../services/breeds.service';
import { Breed } from 'src/app/interfaces/breed.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss'],
})
export class BreedsComponent implements OnInit {
  breeds: Breed[];

  constructor(private breedService: BreedsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getRecords({ page: 1, itemsPerPage: 10 });
    this.route.params.subscribe(r => {
      if(r.q){
        this.breedService.getSearchForBreedByName(r.q).subscribe(r => {
          this.breeds = r;
        });
      }
      
    })
  }

  getRecords({ page, itemsPerPage }) {
    this.breedService.getListTheCatBreeds(page, itemsPerPage).subscribe((r) => {
      this.breeds = r;
    });
  }
}
