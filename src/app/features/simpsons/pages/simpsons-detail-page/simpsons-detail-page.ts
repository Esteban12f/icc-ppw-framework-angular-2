import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

import { of, tap } from 'rxjs';

import { SimpsonsService } from '../../services/simpsons.service';
import { SimpsonsCacheService } from '../../services/simpsons-cache.service';

import { AuthService } from '../../../../core/services/auth/auth.service';
import { FavoritesService } from '../../../../core/services/favorites/favorites.service';

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
  private characterId = Number(
    this.route.snapshot.paramMap.get('id')
  );

  // authService como publico para usarlo en el HTML.
  authService = inject(AuthService);

  private favoritesService = inject(FavoritesService);

  // Signal local: refleja inmediatamente si el personaje es favorito.
  isFavorite = signal(false);

  // Resource reactivo.
  characterResource = rxResource({

    stream: () => {

      // Buscar primero en cache.
      const cached = this.cacheService.getById(this.characterId);

      if (cached) {
        return of(cached);
      }

      // Consultar API.
      return this.simpsonsService
        .getCharacterById(this.characterId)
        .pipe(
          tap((character) => {
            this.cacheService.save(character);
          })
        );
    },
  });

  // Alterna favorito.
  toggleFavorite() {

    const uid = this.authService.uid;

    if (!uid) return;

    if (this.isFavorite()) {

      this.favoritesService
        .removeFavorite(uid, this.characterId)
        .then(() => {
          this.isFavorite.set(false);
        });

    } else {

      this.favoritesService
        .addFavorite(uid, this.characterId)
        .then(() => {
          this.isFavorite.set(true);
        });
    }
  }

}
