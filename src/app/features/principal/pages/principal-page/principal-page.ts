import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-principal-page',
  imports: [RouterLink],
  templateUrl: './principal-page.html',
  styleUrl: './principal-page.css',
})
export class PrincipalPage {
  private authService = inject(AuthService);
  readonly usuario = this.authService.usuario;
}
