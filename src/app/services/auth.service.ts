import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  registerUser(email: string, password: string, role: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ email, password, role });
    localStorage.setItem('users', JSON.stringify(users));
  }

  
  login(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));  
      this.redirectUser(user.role);
    } 
  }

  private redirectUser(role: string) {
    if (role === 'admin') {
      this.router.navigate(['/registro']);
    } else if (role === 'profesor') {
      this.router.navigate(['/menuprofesor']);
    } else if (role === 'alumno') {
      this.router.navigate(['/menualumno']);
    }
  }
}