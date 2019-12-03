import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FavoritesComponent implements OnInit {

  title="Your Favorite Games"


  constructor() { }

  ngOnInit() {
  }

}