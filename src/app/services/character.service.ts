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

// public updateFilm(index: number, newFilm : Film){
//     console.log("film updaten");
//     this.http.put(this.serverUrl + "/" + this.films[index]._id, { name: newFilm.name, description: newFilm.description, imagePath: newFilm.imagePath, characters: newFilm.characters })
//       .toPromise()
//       .then( () => {
//         console.log("film veranderd")
//         this.getFilms()
//         .then(
//           films => {
//             this.films = films
//             this.filmsChanged.next(this.films.slice());
//           }
//         )
//         .catch(error => console.log(error));
//       })
//       .catch( error => { return this.handleError(error) } );
//   }

//   public deleteFilm(index: number){
//     var deletedFilm = this.films[index];
//     console.log("Film verwijderen");
//     this.http.delete(this.serverUrl + "/" + this.films[index]._id)
//       .toPromise()
//       .then( () => {
//         console.log("film verwijderd") 
//         this.getFilms()
//         .then(
//           films => {
//             this.films = films
//             this.filmsChanged.next(this.films.slice());
//           }
//         )
//         .catch(error => console.log(error));
//       })
//       .catch( error => { return this.handleError(error) } );
//   }

//   public addFilm(film: Film, genreid : String) {
//     console.log('film opslaan');
//     this.http.post(this.serverUrl, { name: film.name, description: film.description, imagePath: film.imagePath, characters: film.characters, genreid: genreid, genre: film.genres })
//       .toPromise() 
//       .then( () => {
//         console.log("film toegevoegd")
//         this.getFilms()
//         .then(
//             films => {
//                 this.films = films
//                 this.filmsChanged.next(this.films.slice());
//               }
//         )
//         .catch(error => console.log(error));
//       }
//       )
//       .catch( error => { return this.handleError(error) } );

//     }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}