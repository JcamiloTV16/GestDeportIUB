import { Component, inject } from '@angular/core';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-eventos-page',
  imports: [],
  templateUrl: './eventos-page.html',
})
export class EventosPage {
  private eventosService = inject(EventosService);
  readonly eventos = this.eventosService.eventos;
}