import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images = [
    {
      imgSrc:'assets/pics/IMG_1174.JPG',
      imgAlt:'Image 1'
    },
    {
      imgSrc:'assets/pics/IMG_1176.JPG',
      imgAlt:'Image 2'
    },
    {
      imgSrc:'assets/pics/IMG_1178.JPG',
      imgAlt:'Image 3'
    },
    {
      imgSrc:'assets/pics/IMG_1180.JPG',
      imgAlt:'Image 4'
    },
    {
      imgSrc:'assets/pic/city-cyber-.jpg',
      imgAlt:'Image 5'
    },
    {
      imgSrc:'assets/pic/city-first-person1.jpg',
      imgAlt:'Image 6'
    },
    {
      imgSrc:'assets/pic/moto-cyber.JPG',
      imgAlt:'Image 7'
    },
    {
      imgSrc:'assets/pic/photocyber.jpg',
      imgAlt:'Image 8'
    },
    {
      imgSrc:'assets/pics/IMG_1179.JPG',
      imgAlt:'Image 9'
    },
    {
      imgSrc:'assets/pic/IMG_1111.WEBP',
      imgAlt:'Image 9'
    },
  ];

  constructor() { }

  getImages() {
    return this.images;
  }
}
