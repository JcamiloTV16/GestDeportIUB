import { Component, inject } from '@angular/core';
import { DeportesService } from '../../services/deportes.service';

@Component({
  selector: 'app-deportes-page',
  imports: [],
  templateUrl: './deportes-page.html',
})
export class DeportesPage {
  private deportesService = inject(DeportesService);
  readonly deportes = this.deportesService.deportes;
}