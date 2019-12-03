import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { storeUser } from '../models/storeuser.model';
import { Subject } from 'rxjs/Subject';
import { favoriteGame } from '../models/favoritegame.model';

@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/users'; // URL to web api
  private user: storeUser;

  startedEditing = new Subject<number>();
  favoriteGamesChanged = new Subject<favoriteGame[]>();

  //
  //
  //
  constructor(private http: Http) { }

  //
  //
  //
  public getUsers(): Promise<User[]> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as User[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public getUser(user: storeUser): Promise<storeUser> {
    console.log('user ophalen met id');
    return this.http.get(this.serverUrl + '/' + user._id, { headers: this.headers })
      .toPromise()
      .then(response => {
          return response.json() as storeUser;
      })
      .catch( error => {
          return this.handleError(error);
      });
  }

  public updateUser(newUser : storeUser){
    console.log("User updaten");
    this.http.put(this.serverUrl + "/" + newUser._id, { username: newUser.username, password: newUser.password, token: newUser.token, favoriteGames: newUser.favoriteGames})
      .toPromise()
      .then( () => {
        console.log("User veranderd")
        this.getUser(newUser)
        .then(
          user => {
            this.user = user
            this.favoriteGamesChanged.next(this.user.favoriteGames.slice())
          }
        )
        .catch(error => console.log(error));
      })
      .catch( error => { return this.handleError(error) } );
  }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}
