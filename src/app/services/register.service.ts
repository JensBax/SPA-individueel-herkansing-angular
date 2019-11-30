import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { registerUser } from '../models/registeruser.model';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class RegisterService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private usersUrl = environment.serverUrl + '/register';

  constructor(private http: Http, private router: Router) {
  }

  public register(user: registerUser) {
    this.http.post(this.usersUrl, {username: user.username, password: user.password})
    .toPromise()
    .then(response => {
      this.router.navigate(['/login']);
    })
    .catch( error => { console.log(error)
    });
  }
}