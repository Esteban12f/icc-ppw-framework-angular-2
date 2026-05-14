import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./features/home/components/app-header/app-header";
import { Hero } from "./features/home/components/hero/hero";
import { Footer } from "./features/home/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, Hero, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ppw-angular');
  isLoggedIn = false;

  materias = ['Programación', 'Estructuras de Datos', 'Base de Datos'];
}
