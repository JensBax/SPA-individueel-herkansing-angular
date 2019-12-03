import { Component, OnInit} from '@angular/core';

import { Game } from '../../../models/game.model';
import { GameService } from '../../../services/game.service';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service'; 
import { storeUser } from '../../../models/storeuser.model';
import { favoriteGame } from '../../../models/favoritegame.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html'
})
export class GameDetailComponent implements OnInit {
  game: Game;
  id: number;
  currentUser: storeUser;
  favoriteGame: favoriteGame;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService,
              private userService: UserService,
              private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.gameService.getGame(this.id)
            .then(game => {
              this.game = game
            })
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

  onAddFavorite(){
    this.favoriteGame = this.game
    console.log(this.favoriteGame)
    this.currentUser = this.loginService.currentUserValue
    this.userService.getUser(this.currentUser)
    .then(user => {
      user.favoriteGames.push(this.favoriteGame)
      this.userService.updateUser(user)
    })
    this.toastr.success(this.favoriteGame.name + " added to your favorites")
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}