import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-page',
  imports: [FormsModule],
  templateUrl: './contacto-page.html',
})
export class ContactoPage {
  nombre = '';
  email = '';
  mensaje = '';
  enviado = false;

  enviar(): void {
    if (this.nombre && this.email && this.mensaje) {
      this.enviado = true;
    }
  }
}