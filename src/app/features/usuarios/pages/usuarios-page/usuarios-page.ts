import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosService, Usuario } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-page',
  imports: [FormsModule],
  templateUrl: './usuarios-page.html',
})
export class UsuariosPage {
  private usuariosService = inject(UsuariosService);
  readonly usuarios = this.usuariosService.usuarios;

  nuevoNombre = '';
  nuevoEmail = '';
  nuevoRol = 'Deportista';

  agregar(): void {
    if (!this.nuevoNombre || !this.nuevoEmail) return;
    this.usuariosService.agregarUsuario({
      id: 0,
      nombre: this.nuevoNombre,
      email: this.nuevoEmail,
      rol: this.nuevoRol,
    });
    this.nuevoNombre = '';
    this.nuevoEmail = '';
    this.nuevoRol = 'Deportista';
  }

  eliminar(id: number): void {
    this.usuariosService.eliminarUsuario(id);
  }
}