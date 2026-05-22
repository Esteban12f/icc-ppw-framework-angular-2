import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SimpsonsService } from '../../services/simpsons.service';
import { Observable } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-simpsons-page',
  imports: [RouterLink],
  templateUrl: './simpsons-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsPageComponent {
  // Inyectamos el servicio una sola vez en el componente.
  private simpsonsService = inject(SimpsonsService);

  // rxResource conecta Observable -> estado reactivo (loading, error, value).
  simpsonsResource = rxResource({
    // stream ejecuta la consulta de personajes de la pagina 1.
    stream: () => this.simpsonsService.getCharacters(1),
  });
}
