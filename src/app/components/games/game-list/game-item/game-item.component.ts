import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter } from '@angular/core';
import { Game } from '../../../../models/game.model';
import { GameService } from '../../../../services/game.service';
@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class GameItemComponent implements OnInit {
  @Input() game: Game;
  @Input() index: number;
  

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }



}