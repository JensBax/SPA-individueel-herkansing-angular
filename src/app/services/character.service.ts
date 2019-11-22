import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Character } from '../models/character.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/characters'; // URL to web api
  private characters: Character[] = [];

  charactersChanged = new Subject<Character[]>();
  
  //
  //
  //
  constructor(private http: Http) {
   }

  //
  //
  //
  public getCharacters(): Promise<Character[]> {
    console.log('Characters ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.characters = response.json() as Character[];
        console.log(this.characters);
        return this.characters
      })
      .catch(error => { return this.handleError(error) });

  }

  public getCharacter(index: number): Promise<Character> {
    console.log('Character ophalen met id');
    return this.http.get(this.serverUrl + '/' + this.characters[index]._id, { headers: this.headers })
      .toPromise()
      .then(response => {
          console.dir(response.json());
          return response.json() as Character;
      })
      .catch( error => {
          return this.handleError(error);
      });
}

public updateCharacter(index: number, newCharacter : Character){
    this.http.put(this.serverUrl + "/" + this.characters[index]._id, { name: newCharacter.name, description: newCharacter.description, imagePath: newCharacter.imagePath})
      .toPromise()
      .then( () => {
        this.getCharacters()
        .then(
          characters => {
            this.characters = characters
            this.charactersChanged.next(this.characters.slice());
          }
        )
        .catch(error => console.log(error));
      })
      .catch( error => { return this.handleError(error) } );
  }

  public deleteCharacter(index: number){
    var deletedCharacter = this.characters[index];
    this.http.delete(this.serverUrl + "/" + this.characters[index]._id)
      .toPromise()
      .then( () => {
        this.getCharacters()
        .then(
          characters => {
            this.characters = characters
            this.charactersChanged.next(this.characters.slice());
          }
        )
        .catch(error => console.log(error));
      })
      .catch( error => { return this.handleError(error) } );
  }

  public addCharacter(character: Character) {
    this.http.post(this.serverUrl, { name: character.name, description: character.description, imagePath: character.imagePath})
      .toPromise() 
      .then( () => {
        this.getCharacters()
        .then(
            characters => {
                this.characters = characters
                this.charactersChanged.next(this.characters.slice());
              }
        )
        .catch(error => console.log(error));
      }
      )
      .catch( error => { return this.handleError(error) } );
    }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}