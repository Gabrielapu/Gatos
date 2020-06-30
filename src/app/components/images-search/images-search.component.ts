import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ImagesService } from '../../services/images.service';
import { Categorie } from '../../interfaces/categorie.interface';
import { ImageSearch } from '../../interfaces/imageSearch.interface';

@Component({
  selector: 'app-images-search',
  templateUrl: './images-search.component.html',
  styleUrls: ['./images-search.component.scss']
})
export class ImagesSearchComponent implements OnInit {

  searchForm:FormControl;
  images:ImageSearch[];
  categories:Categorie[];

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.searchForm = new FormControl('');
    this.getImages({ page: 1, itemsPerPage: 9 });
    this.putCategories();
  }

  putCategories() {
    this.imagesService.getCategories().subscribe(r => {
      this.categories = r;
    })
  }

  getImages({ page, itemsPerPage }, id?:number) {
    this.imagesService.getAllImages(page, itemsPerPage, id).subscribe(r => {
      this.images = r;
      console.log(r);
    });
  }

  onClick() {
    this.getImages({page: 1, itemsPerPage: 9 }, this.searchForm.value)
  }

}
