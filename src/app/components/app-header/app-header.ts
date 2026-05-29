import { Component, inject, OnInit, signal } from '@angular/core';

import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { UpperCasePipe } from '@angular/common';

import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    UpperCasePipe
  ],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeaderComponent implements OnInit {

  isAdmin = signal(false);

  async ngOnInit() {

    const role = await this.authService.getRole();

    this.isAdmin.set(role === 'admin');
  }

  readonly brand = signal('PPW Angular');

  private authService = inject(AuthService);

  private router = inject(Router);

  // Signal reactivo de sesion.
  currentUser = this.authService.currentUser;

  logout() {

    this.authService.logout().subscribe(() => {

      // Volver a /auth despues del logout.
      this.router.navigate(['/auth']);

    });
  }

}
