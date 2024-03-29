import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  // Sign in with Google
  async signInWithGoogle() {
    try {
      await this.authService.signInWithGoogle();
      // Handle successful login
    } catch (error) {
      // Handle error
    }
  }
}
