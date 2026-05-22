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

export const routes: Routes = [
  { path: '', component: HomePage },

  { path: 'student', component: StudentPage },

  { path: 'student/:id', component: StudentDetailPage },

  { path: 'layouts', component: LayoutsPage },

  { path: 'signup', component: SignupPage },

  { path: 'profile', component: ProfilePage },

  { path: 'project-config', component: ProjectConfigPage},

  { path: 'ui-components', component: UiComponentsPage },

  { path: 'simpsons', component: SimpsonsPageComponent, },

  { path: 'simpsons/:id', component: SimpsonsDetailPage, },

  // Redireccionamiento
  { path: '**', redirectTo: '' },
];
