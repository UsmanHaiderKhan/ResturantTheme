import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  navBarItems: Array<any>;
  currentSelected = "main-banner";


  constructor() {
    this.navBarItems = [
      { name: 'Home', link: 'main-banner' },
      { name: 'Our Story', link: 'our-story' },
      { name: 'Dishes', link: 'dishes' },
      { name: 'Menu', link: 'menu' },
      { name: 'Blog', link: 'blog' },
      { name: 'Contact', link: 'contact' },
    ];
  }

  ngOnInit(): void {
  }

  onSelected(navlink: string) {
    this.currentSelected = navlink;
    console.log(navlink);
  }


}
