import { Injectable, signal } from '@angular/core';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private _usuarios = signal<Usuario[]>([
    { id: 1, nombre: 'Ana García', email: 'ana@email.com', rol: 'Administrador' },
    { id: 2, nombre: 'Carlos López', email: 'carlos@email.com', rol: 'Entrenador' },
    { id: 3, nombre: 'María Pérez', email: 'maria@email.com', rol: 'Deportista' },
    { id: 4, nombre: 'Pedro Ramírez', email: 'pedro@email.com', rol: 'Entrenador' },
    { id: 5, nombre: 'Laura Gómez', email: 'laura@email.com', rol: 'Deportista' },
  ]);

  readonly usuarios = this._usuarios.asReadonly();

  agregarUsuario(usuario: Usuario): void {
    this._usuarios.update(lista => [...lista, { ...usuario, id: Math.max(...lista.map(u => u.id), 0) + 1 }]);
  }

  eliminarUsuario(id: number): void {
    this._usuarios.update(lista => lista.filter(u => u.id !== id));
  }
}