import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

interface Login {
      username: string;
      password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login = new FormGroup({
       username: new FormControl('Nancy', Validators.minLength(2)),
       password: new FormControl()
    });
  constructor() { }

  ngOnInit() {
  }

}
