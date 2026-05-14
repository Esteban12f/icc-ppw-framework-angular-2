import { Component, signal } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [UpperCasePipe, LowerCasePipe, DecimalPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  anio = signal(2026);

  mensaje = signal('programacion web');
}