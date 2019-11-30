import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../../services/register.service'; 
import { NgForm } from '@angular/forms';
import { registerUser } from '../../models/registeruser.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') formValues;
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  register(form: NgForm){
    const value = form.value
    console.log(value);
    const user = new registerUser(value.username, value.password);
    this.registerService.register(user);
  }
}