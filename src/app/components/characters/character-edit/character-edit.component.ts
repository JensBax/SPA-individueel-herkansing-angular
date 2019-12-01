import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../models/character.model'
// import { FilmService } from '../../../services/film.service';
// import { Film } from '../../../models/film.model';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html'
})
export class CharacterEditComponent implements OnInit {
  id: number;
  editMode = false;
  characterForm: FormGroup;
//   films: Film[];
//   currentFilm : Film = null;
  currentCharacter : Character = null;

  constructor(private route: ActivatedRoute,
              private characterService: CharacterService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          if(this.editMode){
            this.characterService.getCharacter(this.id)
            .then((character) => {
              this.currentCharacter = character
            })
            .catch(error => console.log(error))
          }
          this.initForm();
        }
      );
//       this.filmservice.getFilms()
//       .then(films => {
//         this.films = films
//   })
    // .catch(error => console.log(error));
  }



  onSubmit() {
    if (this.editMode) {
      this.characterService.updateCharacter(this.id, this.characterForm.value);
    } else {
    //   console.log("on submit " + this.currentFilm.name)
    //   this.characterService.addCharacter(this.characterForm.value,this.currentFilm._id );
      this.characterService.addCharacter(this.characterForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let characterName = '';
    let characterImagePath = '';
    let characterDescription = '';
    let currentcharacter;

    if (this.editMode) {
      this.characterService.getCharacter(this.id)
      .then(
        character => {
        currentcharacter = character;
        characterName = currentcharacter.name;
        characterImagePath = currentcharacter.imagePath;
        characterDescription = currentcharacter.description;
        }
      )
      .catch(error => console.log(error));
      
    }

    this.characterForm = new FormGroup({
      'name': new FormControl(characterName, Validators.required),
      'imagePath': new FormControl(characterImagePath, Validators.required),
      'description': new FormControl(characterDescription, Validators.required),
    });
  }

//   onChangeFilm(film:Film){
//     this.currentFilm = film;
//     console.log("changefilm to " + film)
//   }

}