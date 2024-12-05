import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  homeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.homeForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9.@]*$')
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$')
        ]
      ]
    });
  }

  ngOnInit() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.length === 0) {
      this.authService.registerUser('admin@duoc.cl', 'admin123', 'admin');
      console.log('Usuario admin registrado manualmente');
    }}

  iniciarSesion() {
    const email = this.homeForm.value.username;
    const password = this.homeForm.value.password;
    this.authService.login(email, password);
  }
}