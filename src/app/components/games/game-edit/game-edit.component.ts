import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { GameService } from '../../../services/game.service';
import { DeveloperService } from '../../../services/developer.service';
import { CharacterService } from '../../../services/character.service';
import { Game } from '../../../models/game.model';
import { Developer } from '../../../models/developer.model';
import { Character } from '../../../models/character.model';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html'
})
export class GameEditComponent implements OnInit {
  id: number;
  editMode = false;
  gameForm: FormGroup;
  currentGame: Game = null;
  characters: Character[];
  developers: Developer[];

  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private router: Router,
              private developerService: DeveloperService,
              private characterService: CharacterService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          if(this.editMode){
            this.gameService.getGame(this.id)
            .then((game) => {
              this.currentGame = game
            })
            .catch(error => console.log(error))
            this.characterService.getCharacters()
            .then( characters => this.characters = characters )
            .catch(error => console.log(error))
          }
          this.characterService.getCharacters()
          .then( characters => this.characters = characters )
          .catch(error => console.log(error))
          this.developerService.getDevelopers()
          .then( developers => this.developers = developers)
          .catch(error => console.log(error))
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.gameService.updateGame(this.id, this.gameForm.value);
    } else {
      this.gameService.addGame(this.gameForm.value);
    }
    this.onCancel();
  }

  onDeleteCharacter(index: number) {
    (<FormArray>this.gameForm.get('characters')).removeAt(index);
  }

  onAddCharacter(character: Character){
    (<FormArray>this.gameForm.get('characters')).push(
      new FormGroup({
        'name': new FormControl(character.name, Validators.required),
        'description': new FormControl(character.description, Validators.required),
        'imagePath': new FormControl(character.imagePath, Validators.required)
      })
    );
  }

  onAddDeveloper(developer: Developer) {
    (<FormArray>this.gameForm.get('developers')).push(
      new FormGroup({
        'name': new FormControl(developer.name, Validators.required),
        'imagePath': new FormControl(developer.imagePath, Validators.required)
      })
    );
  }

  onDeleteDeveloper(index: number) {
    (<FormArray>this.gameForm.get('developers')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let gameName = '';
    let gameImagePath = '';
    let gameDescription = '';
    let gameCharacters = new FormArray([]);
    let gameDevelopers = new FormArray([]);

    if (this.editMode) {
      this.gameService.getGame(this.id)
      .then(
        game => {
        this.currentGame = game;
        gameName = this.currentGame.name;
        gameImagePath = this.currentGame.imagePath;
        gameDescription = this.currentGame.description;
         if (this.currentGame['characters']) {
           for (let character of this.currentGame.characters) {
             gameCharacters.push(
               new FormGroup({
                 'name': new FormControl(character.name, Validators.required),
                 'description': new FormControl(character.description, Validators.required),
                 'imagePath': new FormControl(character.imagePath, Validators.required)
               })
             );
           }
         }
         if (this.currentGame['developers']) {
            for (let developer of this.currentGame.developers) {
              gameDevelopers.push(
                new FormGroup({
                  'name': new FormControl(developer.name, Validators.required),
                  'imagePath': new FormControl(developer.imagePath, Validators.required)
                })
              );
            }
          }
        }
      )
      .catch(error => console.log(error));
      
    }

    this.gameForm = new FormGroup({
      'name': new FormControl(gameName, Validators.required),
      'imagePath': new FormControl(gameImagePath, Validators.required),
      'description': new FormControl(gameDescription, Validators.required),
      'characters': gameCharacters,
      'developers': gameDevelopers      
    });
  }
  

}