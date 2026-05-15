import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-page',
  imports: [RouterLink],
  templateUrl: './student-page.html',
  styleUrl: './student-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentPage {
  readonly students = signal([
    { id: 1, name: 'Juan Pérez' },
    { id: 2, name: 'María Gómez' },
    { id: 3, name: 'Carlos Rodríguez' },
    { id: 4, name: 'Ana Martínez' },
    { id: 5, name: 'Luis Fernández' },
  ])
}
