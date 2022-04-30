import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = [
    'laptop.webp',
    'coding.jpg'
  ]
  titles = [
    'Bring Engineering To The Next Level',
    'Knowledge is Power'
  ]
  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateImage();
  }

  updateImage(){
    setInterval(() =>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(()=>{
        this.showImage = true;
      },10)
    },8000)
  }

}
