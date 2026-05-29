import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentPage } from './features/students/pages/student-page/student-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page/layouts-page';
import { SignupPage } from './features/signup-page/signup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';
import ProjectConfigPage from './features/project/pages/project-config-page/project-config-page';
import { UiComponentsPage } from './features/ui-components/pages/ui-components-page/ui-components-page';
import { SimpsonsPageComponent } from './features/simpsons/pages/simpsons-page/simpsons-page';
import { SimpsonsDetailPage } from './features/simpsons/pages/simpsons-detail-page/simpsons-detail-page';
import { AuthPage } from './features/auth/pages/auth-page/auth-page';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';
import { adminGuard } from './core/guards/admin-guard';
// GUARDS


export const routes: Routes = [

  // PUBLICA
  {
    path: '',
    component: HomePage
  },

  // PUBLICA
  {
    path: 'student',
    component: StudentPage
  },

  // PRIVADA
  {
    path: 'student/:id',
    component: StudentDetailPage,
    canActivate: [authGuard],
  },

  // PUBLICA
  {
    path: 'layouts',
    component: LayoutsPage
  },

  // PUBLICA
  {
    path: 'signup',
    component: SignupPage
  },

  // PRIVADA
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [authGuard],
  },

  // PUBLICA
  {
    path: 'project-config',
    component: ProjectConfigPage
  },

  // PUBLICA
  {
    path: 'ui-components',
    component: UiComponentsPage
  },

  // PUBLICA
  {
    path: 'simpsons',
    component: SimpsonsPageComponent,
  },

  // PRIVADA
  {
    path: 'simpsons/:id',
    component: SimpsonsDetailPage,
    canActivate: [authGuard],
  },

  // SOLO VISITANTES
  {
    path: 'auth',
    component: AuthPage,
    canActivate: [guestGuard],
  },

    // SOLO ADMIN
  {
    path: 'simpsons',
    component: SimpsonsPageComponent,
    canActivate: [adminGuard]
  },

  {
    path: 'simpsons/:id',
    component: SimpsonsDetailPage,
    canActivate: [adminGuard]
  },

  // WILDCARD
  {
    path: '**',
    redirectTo: '',
  },

];
