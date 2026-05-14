import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  titulo = signal('Angular 21');

  descripcion = signal('Componentes reutilizables Angular');

}
