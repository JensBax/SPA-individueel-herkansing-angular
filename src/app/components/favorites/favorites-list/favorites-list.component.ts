import { Component, OnInit,OnDestroy, ViewEncapsulation,Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { storeUser } from '../../../models/storeuser.model';
import { favoriteGame } from '../../../models/favoritegame.model';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FavoriteListComponent implements OnInit {
  currentUser: storeUser;
  favoriteGames: favoriteGame[]
  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private loginService: LoginService
  ) { }

  ngOnInit(){
      this.subscription = this.userService.favoriteGamesChanged.subscribe(
        (favoriteGames: favoriteGame[]) => {
            this.favoriteGames = favoriteGames;
        }
      );
    this.currentUser = this.loginService.currentUserValue
    console.log(this.currentUser);
    this.userService.getUser(this.currentUser)
    .then(user => { this.favoriteGames = user.favoriteGames 
    })
    .catch(error => console.log(error));
  }

  onEditFavoriteGames(){
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
}