import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';
 
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  providers: [CharacterService]
})
export class CharactersComponent implements OnInit {

    title="Characters"
    characters: Character[]

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters()
      .then(characters => this.characters = characters)
      .catch(error => console.log(error));
  }

}