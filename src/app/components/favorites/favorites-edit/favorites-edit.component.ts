// import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
// import { UserService } from '../../../services/user.service';
// import { LoginService } from '../../../services/login.service';
// import { NgForm } from '@angular/forms';
// import { Subscription } from 'rxjs';
// import { storeUser } from '../../../models/storeuser.model';
// import { favoriteGame } from '../../../models/favoritegame.model';
  
//   @Component({
//     selector: 'app-favorite-edit',
//     templateUrl: './favorites-edit.component.html'
//  })
//   export class FavoriteEditComponent implements OnInit, OnDestroy {

//     @ViewChild("favoriteF") slForm: NgForm;
//     subscription: Subscription;
//     editMode: boolean = false;
//     editedItemId: number;
//     editedItem: favoriteGame;
//     currentUser: storeUser
  
//     constructor(private userService: UserService, private loginService: LoginService) { }
  
//     ngOnInit() {
  
//       this.subscription = this.userService.startedEditing
//         .subscribe(
//           (id:number) => {
  
//             this.editedItemId = id;
  
//             this.editMode = true;

//             this.currentUser = this.loginService.currentUserValue
//             this.userService.getUser(this.currentUser)
//             .then(user => {
//                 this.editedItem = user.favoriteGames[this.editedItemId]
//                 console.log(this.editedItem)
//             })
//             .catch(error => console.log(error));
//             });
//           };
  
//     onDelete(id: number) {
//         this.currentUser = this.loginService.currentUserValue
//         this.currentUser.favoriteGames.splice(id);
//         console.log(this.currentUser.favoriteGames)
//         this.userService.updateUser(this.currentUser);
//         console.log(this.currentUser)
//         this.onClear()
//     }
  
//     onClear(){
//       this.slForm.reset();
//       this.editMode = false;
//     }
  
//     ngOnDestroy(){
//       this.subscription.unsubscribe();
//     }
    
//   }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { GameService } from '../../../services/game.service';
import { DeveloperService } from '../../../services/developer.service';
import { Game } from '../../../models/game.model';
import { Developer } from '../../../models/developer.model';

import { favoriteGame } from '../../../models/favoritegame.model';
import { storeUser } from '../../../models/storeuser.model';
import { LoginService } from '../../../services/login.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-favorites-edit',
  templateUrl: './favorites-edit.component.html'
})
export class FavoriteEditComponent implements OnInit {
  id: number;
  editMode = false;
  gameForm: FormGroup;
  currentGame: Game = null;
  developers: Developer[]
  currentUser: storeUser;
  favoriteGames: favoriteGame[]

  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private router: Router,
              private userService: UserService,
              private loginService: LoginService) {
  }

  ngOnInit() {
        this.currentUser = this.loginService.currentUserValue
        this.userService.getUser(this.currentUser)
        .then(user => { this.favoriteGames = user.favoriteGames })
        .catch(error => console.log(error));
          this.initForm();
        }

  onSubmit() {
    this.currentUser.favoriteGames = this.gameForm.value.favoriteGames;
    console.log(this.currentUser)
    this.userService.updateUser(this.currentUser)
    this.onCancel();
  }


  onDeleteFavoriteGame(index: number) {
    (<FormArray>this.gameForm.get('favoriteGames')).removeAt(index);
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let favoriteGames = new FormArray([]);

      this.userService.getUser(this.currentUser)
      .then(
        user => {
        this.currentUser = user;
         if (this.currentUser['favoriteGames']) {
           for (let favoriteGame of this.currentUser.favoriteGames) {
             favoriteGames.push(
               new FormGroup({
                 'name': new FormControl(favoriteGame.name, Validators.required),
                 'description': new FormControl(favoriteGame.description, Validators.required),
                 'imagePath': new FormControl(favoriteGame.imagePath, Validators.required)
               })
             );
           }
         }
        }
      )
      .catch(error => console.log(error));


    this.gameForm = new FormGroup({
      'favoriteGames': favoriteGames,
   
    });
  }
  

}