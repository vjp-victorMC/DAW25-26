import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  standalone: true, // Añade esto si es un componente standalone
  imports: [],
  templateUrl: './prueba.html',
  styleUrls: ['./prueba.css'], // Corrige aquí (de styleUrl a styleUrls)
})
export class Prueba {
  private anio = new Date().getFullYear();

  /**
   * getFooter
   */
  public getAnio() {
    return this.anio;
  }


}
