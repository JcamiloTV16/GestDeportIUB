import { Injectable, signal } from '@angular/core';

export interface Evento {
  id: number;
  nombre: string;
  fecha: string;
  lugar: string;
  deporte: string;
  estado: string;
}

@Injectable({ providedIn: 'root' })
export class EventosService {
  private _eventos = signal<Evento[]>([
    { id: 1, nombre: 'Torneo de Fútbol Interfacultades', fecha: '2026-07-15', lugar: 'Cancha Principal', deporte: 'Fútbol', estado: 'Próximo' },
    { id: 2, nombre: 'Campeonato de Baloncesto', fecha: '2026-07-22', lugar: 'Coliseo Cubierto', deporte: 'Baloncesto', estado: 'Próximo' },
    { id: 3, nombre: 'Maratón Universitaria', fecha: '2026-08-05', lugar: 'Circuito Campus', deporte: 'Atletismo', estado: 'Próximo' },
    { id: 4, nombre: 'Torneo de Tenis', fecha: '2026-06-10', lugar: 'Canchas de Tenis', deporte: 'Tenis', estado: 'Finalizado' },
    { id: 5, nombre: 'Competencia de Natación', fecha: '2026-06-20', lugar: 'Piscina Olímpica', deporte: 'Natación', estado: 'Finalizado' },
  ]);

  readonly eventos = this._eventos.asReadonly();
}