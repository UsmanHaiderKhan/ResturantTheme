import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent implements OnInit {

  // sliderArrays: Array<string>;
  // customOptions: any;
  silderArrays = [
    { name: 'The Delicious Restaurant', subheading: '“First we eat, then we do everything else.”', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.' },
    { name: 'Get Resturant Deals', subheading: '“First we eat, then we do everything else.”', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.' },
    { name: 'Enjoy Your Meal', subheading: '“First we eat, then we do everything else.”', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.' },
    { name: 'Special For You Guys', subheading: '“First we eat, then we do everything else.”', description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.' },

  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['<img src="../../assets/images/arrow-left.png" alt="left-arrow" />',
      '<img src="../../assets/images/arrow-right.png" alt="right-arrow" />'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  constructor() { }


  ngOnInit(): void {
  }







}
