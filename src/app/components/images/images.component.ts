import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Image } from '../../interfaces/image.interface';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  images: Image[];

  loaded: number = 0;
  total: number= 0;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.getImages();
  }

  onClick(imageInput: any) {
    if (imageInput.files[0]) {
      this.imagesService.uploadImage(imageInput.files[0]).subscribe((r) => {
        /*   this.getImages(); */

        if (r.type === HttpEventType.UploadProgress) {
          this.loaded = r.loaded;
          this.total = r.total;
        }
        if (r.type === HttpEventType.Response) {
          this.loaded = 0;
          this.total = 0;
          this.getImages();
        }


        /* alert('Buena choro') */
      });
    } else {
      alert('Selecciona la imagen primero oe');
    }
  }

  getImages() {
    this.imagesService.getUploadedImages('1', '10').subscribe((r) => {
      console.log(r);
      this.images = r;
    });
  }
}
