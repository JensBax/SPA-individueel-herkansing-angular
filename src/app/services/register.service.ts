import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { registerUser } from '../models/registeruser.model';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class RegisterService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private usersUrl = environment.serverUrl + '/register';

  constructor(private http: Http, private router: Router, private toastr: ToastrService) {
  }

  public register(user: registerUser) {
    this.http.post(this.usersUrl, {username: user.username, password: user.password, favoriteGames: user.favoriteGames})
    .toPromise()
    .then(response => {
      this.toastr.success("Register succesfull!")
      this.router.navigate(['/login']);
    })
    .catch( error => {
      this.toastr.error(error.json().error);
  });
  }
}