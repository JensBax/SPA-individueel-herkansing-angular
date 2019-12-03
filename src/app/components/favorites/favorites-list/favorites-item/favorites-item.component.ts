import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter } from '@angular/core';
import { favoriteGame } from '../../../../models/favoritegame.model';

@Component({
  selector: 'app-favorites-item',
  templateUrl: './favorites-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FavoriteItemComponent implements OnInit {
  @Input() favoriteGame: favoriteGame;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }



}