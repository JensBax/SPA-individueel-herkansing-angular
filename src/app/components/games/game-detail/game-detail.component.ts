import { Component, OnInit} from '@angular/core';

import { Game } from '../../../models/game.model';
import { GameService } from '../../../services/game.service';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { LoginService } from '../../../services/login.service'; 

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html'
})
export class GameDetailComponent implements OnInit {
  game: Game;
  id: number;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.gameService.getGame(this.id)
            .then(game => this.game = game)
            .catch(error => console.log(error));
        }
        
      );
  }
  onEditGame(){
    this.router.navigate(['edit'],{relativeTo: this.route})
  }

  onDeleteGame(){
    if(this.loginService.currentUserValue){
      this.gameService.deleteGame(this.id);
      this.router.navigate(['/games']);
    }else{
      this.router.navigate(['/login']);
    }
  }
}