import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
})
export class LoginPage implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  error = '';
  enviando = false;

  ngOnInit(): void {
    if (this.authService.usuario()) {
      this.router.navigate(['/principal']);
    }
  }

  async ingresar(): Promise<void> {
    if (!this.email || !this.password) return;

    this.enviando = true;
    this.error = '';

    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/principal']);
    } catch {
      this.error = 'Email o contraseña incorrectos. Verifica tus credenciales.';
    } finally {
      this.enviando = false;
    }
  }
}
