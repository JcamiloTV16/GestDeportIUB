import { Component } from '@angular/core';

@Component({
  selector: 'app-equipos-page',
  imports: [],
  templateUrl: './equipos-page.html',
})
export class EquiposPage {
  readonly equipos = [
    { id: 1, nombre: 'Tigres IUB', deporte: 'Fútbol', integrantes: 18 },
    { id: 2, nombre: 'Águilas IUB', deporte: 'Baloncesto', integrantes: 12 },
    { id: 3, nombre: 'Delfines IUB', deporte: 'Natación', integrantes: 10 },
    { id: 4, nombre: 'Halcones IUB', deporte: 'Voleibol', integrantes: 12 },
    { id: 5, nombre: 'Corceles IUB', deporte: 'Atletismo', integrantes: 15 },
  ];
}