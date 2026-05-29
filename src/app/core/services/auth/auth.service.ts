import { effect, inject, Injectable } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';

import { from } from 'rxjs';

import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private auth = inject(Auth);

  /**
   * Estados posibles:
   *
   * undefined -> Firebase aun verificando sesion
   * null      -> usuario no autenticado
   * User      -> usuario autenticado
   */
  currentUser = toSignal<User | null | undefined>(
    authState(this.auth),
    {
      initialValue: undefined,
    }
  );

  // LOGIN EMAIL/PASSWORD
  login(email: string, password: string) {

    return from(
      signInWithEmailAndPassword(
        this.auth,
        email,
        password
      )
    );
  }

  // REGISTRO EMAIL/PASSWORD
  register(email: string, password: string) {

    return from(
      createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      )
    );
  }

  // LOGIN GOOGLE
  loginWithGoogle() {

    const provider = new GoogleAuthProvider();

    return from(
      signInWithPopup(
        this.auth,
        provider
      )
    );
  }

  // LOGOUT
  logout() {

    return from(
      signOut(this.auth)
    );
  }

  // UID RAPIDO
  get uid(): string | null {
    return this.currentUser()?.uid ?? null;
  }

  printUid() {
    console.log('UID:', this.currentUser()?.uid);
  }

  constructor() {
    effect(() => {
      const user = this.currentUser();

      if (user) {
        console.log('UID:', user.uid);
      }
    });
  }

  async getRole(): Promise<string | null> {

    const user = this.auth.currentUser;

    if (!user) return null;

    const token = await user.getIdTokenResult();

    return token.claims['role'] as string || null;
  }

}