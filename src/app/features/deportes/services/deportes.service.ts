import { Injectable, signal } from '@angular/core';

export interface Deporte {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
  color: string;
}

@Injectable({ providedIn: 'root' })
export class DeportesService {
  private _deportes = signal<Deporte[]>([
    { id: 1, nombre: 'Fútbol',      descripcion: 'Deporte de equipo más popular del mundo.',                                        icono: 'sports_soccer',     color: '#198754' },
    { id: 2, nombre: 'Baloncesto',  descripcion: 'Deporte de equipo que se juega con un balón y canastas.',                         icono: 'sports_basketball',  color: '#fd7e14' },
    { id: 3, nombre: 'Voleibol',    descripcion: 'Deporte donde dos equipos se enfrentan sobre un terreno de juego.',               icono: 'sports_volleyball',  color: '#0dcaf0' },
    { id: 4, nombre: 'Natación',    descripcion: 'Deporte acuático que consiste en desplazarse en el agua.',                        icono: 'pool',               color: '#0d6efd' },
    { id: 5, nombre: 'Atletismo',   descripcion: 'Conjunto de disciplinas que incluyen carreras, saltos y lanzamientos.',           icono: 'directions_run',     color: '#dc3545' },
    { id: 6, nombre: 'Tenis',       descripcion: 'Deporte que se juega con raquetas y una pelota.',                                 icono: 'sports_tennis',      color: '#ffc107' },
  ]);

  readonly deportes = this._deportes.asReadonly();
}