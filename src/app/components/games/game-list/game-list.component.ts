import { Component, OnInit,OnDestroy, ViewEncapsulation,Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../models/game.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class GameListComponent implements OnInit, OnDestroy {
  games: Game[];
  subscription: Subscription;

  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(){
      this.subscription = this.gameService.gamesChanged.subscribe(
          (games: Game[]) => {
              this.games = games;
          }
      );
    this.gameService.getGames()
      .then(games => {
          this.games = games
    })
      .catch(error => console.log(error));
  }

  onNewGame(){
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
}