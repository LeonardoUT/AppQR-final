import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registroForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ]
      ],
      role: [
        'alumno', 
        Validators.required
      ]
    });
  }

  registrarUsuario() {
    const email = this.registroForm.value.email;
    const password = this.registroForm.value.password;
    const role = this.registroForm.value.role;

    this.authService.registerUser(email, password, role);

Swal.fire({
      icon: 'success',
      title: 'Usuario registrado',
      text: `El usuario ha sido registrado como ${role}.`
    }).then(() => {
      this.registroForm.reset({ role: 'alumno' });
    });
  }
}