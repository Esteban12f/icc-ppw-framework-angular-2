import { inject } from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

import {
  Auth,
  authState
} from '@angular/fire/auth';

import {
  from,
  map,
  of,
  switchMap,
  take
} from 'rxjs';

export const adminGuard: CanActivateFn = () => {

  const auth = inject(Auth);

  const router = inject(Router);

  return authState(auth).pipe(

    // Esperar primer estado real de Firebase
    take(1),

    switchMap((user) => {

      // No autenticado
      if (!user) {

        return of(
          router.createUrlTree(['/auth'])
        );

      }

      // Obtener claims del token
      return from(
        user.getIdTokenResult()
      ).pipe(

        map((token) => {

          const role = token.claims['role'];

          // Solo admin entra
          return role === 'admin'
            ? true
            : router.createUrlTree(['/']);

        }),
      );
    }),
  );
};

