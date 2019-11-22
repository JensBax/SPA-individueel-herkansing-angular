import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameService } from '../../services/game.service';
 
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [GameService]
})
export class GamesComponent implements OnInit {

  title="Games"

  constructor(private gameService: GameService) { }

  ngOnInit() {

  }

}
