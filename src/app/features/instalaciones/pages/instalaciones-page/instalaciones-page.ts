import { Component } from '@angular/core';

@Component({
  selector: 'app-instalaciones-page',
  imports: [],
  templateUrl: './instalaciones-page.html',
})
export class InstalacionesPage {
  readonly instalaciones = [
    { id: 1, nombre: 'Cancha Principal', tipo: 'Fútbol', capacidad: 2000, estado: 'Disponible' },
    { id: 2, nombre: 'Coliseo Cubierto', tipo: 'Baloncesto / Voleibol', capacidad: 800, estado: 'Disponible' },
    { id: 3, nombre: 'Piscina Olímpica', tipo: 'Natación', capacidad: 500, estado: 'En mantenimiento' },
    { id: 4, nombre: 'Canchas de Tenis', tipo: 'Tenis', capacidad: 100, estado: 'Disponible' },
    { id: 5, nombre: 'Pista de Atletismo', tipo: 'Atletismo', capacidad: 1500, estado: 'Disponible' },
    { id: 6, nombre: 'Gimnasio Cubierto', tipo: 'Multideportivo', capacidad: 300, estado: 'Disponible' },
  ];
}