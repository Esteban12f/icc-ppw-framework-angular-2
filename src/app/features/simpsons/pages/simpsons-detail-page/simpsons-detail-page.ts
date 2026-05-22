import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpsonsService } from '../../services/simpsons.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { SimpsonsCacheService } from '../../services/simpsons-cache.service';
import { tap } from 'rxjs/internal/operators/tap';
import { of } from 'rxjs';

@Component({
  selector: 'app-simpsons-detail-page',
  imports: [RouterLink],
  templateUrl: './simpsons-detail-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonsDetailPage {
  
  // Dependencias del componente.
  private route = inject(ActivatedRoute);
  private simpsonsService = inject(SimpsonsService);
  private cacheService = inject(SimpsonsCacheService);
    // Convertimos el parametro de ruta a numero.
  private characterId = Number(this.route.snapshot.paramMap.get('id'));
  

    // Resource reactivo: expone isLoading, error y value para el template.
  characterResource = rxResource({
    stream: () => {
      // Paso A: buscar primero en cache local.
      const cached = this.cacheService.getById(this.characterId);
      if (cached) {
        // Si existe en localStorage, devolvemos el dato al instante.
        return of(cached);
      }

      // Paso B: si no existe en cache, consultar API.
      return this.simpsonsService.getCharacterById(this.characterId).pipe(
        // Guardamos la respuesta para visitas futuras.
        tap((character) => this.cacheService.save(character))
      );
    },
  });

}
