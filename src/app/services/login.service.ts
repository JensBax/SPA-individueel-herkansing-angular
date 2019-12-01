import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { storeUser } from '../models/storeuser.model';
import { loginUser } from '../models/loginuser.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class LoginService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private options = new RequestOptions({ headers: this.headers });
  private loginUrl = environment.serverUrl + '/login';
  private currentUserSubject: BehaviorSubject<storeUser>;
  public currentUser: Observable<storeUser>;

  constructor(private http: Http, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<storeUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): storeUser {
    return this.currentUserSubject.value;
}

  public login(user: loginUser) {
    this.http.post(this.loginUrl, {username: user.username, password: user.password}, {headers: this.headers})
    .toPromise()
    .then(response => {
      const responseUser = new storeUser(response.json().id, response.json().username, response.json().token);
      localStorage.setItem('currentUser', JSON.stringify(responseUser));
      this.currentUserSubject.next(responseUser);
      this.router.navigate(['/games']); 
    })
    .catch( error => {
      console.log(error);
    });
  }

  public logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(["/login"])
  }
}
