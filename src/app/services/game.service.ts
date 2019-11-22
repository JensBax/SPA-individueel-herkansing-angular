import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Game } from '../models/game.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/games'; // URL to web api
  private games: Game[] = [];

  gamesChanged = new Subject<Game[]>();
  
  //
  //
  //
  constructor(private http: Http) {
   }

  //
  //
  //
  public getGames(): Promise<Game[]> {
    console.log('Games ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.games = response.json() as Game[];
        console.log(this.games);
        return this.games
      })
      .catch(error => { return this.handleError(error) });

  }

  public getGame(index: number): Promise<Game> {
    console.log('Game ophalen met id');
    return this.http.get(this.serverUrl + '/' + this.games[index]._id, { headers: this.headers })
      .toPromise()
      .then(response => {
          console.dir(response.json());
          return response.json() as Game;
      })
      .catch( error => {
          return this.handleError(error);
      });
}

public updateGame(index: number, newGame : Game){
    console.log("Game updaten");
    this.http.put(this.serverUrl + "/" + this.games[index]._id, { name: newGame.name, description: newGame.description, imagePath: newGame.imagePath, characters: newGame.characters, developers: newGame.developers })
      .toPromise()
      .then( () => {
        console.log("Game veranderd")
        this.getGames()
        .then(
          games => {
            this.games = games
            this.gamesChanged.next(this.games.slice());
          }
        )
        .catch(error => console.log(error));
      })
      .catch( error => { return this.handleError(error) } );
  }

  public deleteGame(index: number){
    console.log("Game verwijderen");
    this.http.delete(this.serverUrl + "/" + this.games[index]._id)
      .toPromise()
      .then( () => {
        console.log("game verwijderd") 
        this.getGames()
        .then(
          games => {
            this.games = games
            this.gamesChanged.next(this.games.slice());
          }
        )
        .catch(error => console.log(error));
      })
      .catch( error => { return this.handleError(error) } );
  }

  public addGame(game: Game) {
    console.log('Game opslaan');
    this.http.post(this.serverUrl, { name: game.name, description: game.description, imagePath: game.imagePath, characters: game.characters, developers: game.developers })
      .toPromise() 
      .then( () => {
        console.log("Game toegevoegd")
        this.getGames()
        .then(
            games => {
                this.games = games
                this.gamesChanged.next(this.games.slice());
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