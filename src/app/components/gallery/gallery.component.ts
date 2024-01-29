import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';

export interface Slide{
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

   images: Slide[] = [];

  selectedIndex = 5;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages(); // Ottenere le immagini dal servizio
  }

  showPrev(i: number){
if (this.selectedIndex > 0){
  this.selectedIndex = i - 1;
}
  }

  showNext(i: number){
    if (this.selectedIndex < this.images?.length - 1){
      this.selectedIndex = i + 1;
    }
  }
}
