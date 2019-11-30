import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login.service';
import { loginUser } from '../../models/loginuser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService, private router: Router) { }
    username: string;
    password: string;

  ngOnInit() {
  }

  login(form: NgForm){
    const value = form.value
    const user = new loginUser(value.username, value.password);
    this.loginService.login(user);
  }
}