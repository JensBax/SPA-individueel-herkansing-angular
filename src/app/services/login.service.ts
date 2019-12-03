import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { storeUser } from '../models/storeuser.model';
import { loginUser } from '../models/loginuser.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class LoginService {

  private headers = new Headers({'Content-Type': 'application/json'});
  //private options = new RequestOptions({ headers: this.headers });
  private loginUrl = environment.serverUrl + '/login';
  private currentUserSubject: BehaviorSubject<storeUser>;
  public currentUser: Observable<storeUser>;

  constructor(private http: Http, private router: Router, private toastr: ToastrService) {
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
      console.log(response.json())
      const responseUser = new storeUser(response.json()._id, response.json().username, response.json().password, response.json().token, response.json().favoriteGames);
      localStorage.setItem('currentUser', JSON.stringify(responseUser));
      this.currentUserSubject.next(responseUser);
      this.toastr.success("Login succesfull!")
      this.router.navigate(['/games']); 
    })
    .catch( error => {
      this.toastr.error(error.json().error);
    });
  }

  public logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.toastr.success("Logout succesfull!")
    this.router.navigate(["/login"])
  }
}
