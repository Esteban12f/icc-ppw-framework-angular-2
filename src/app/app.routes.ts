import { Routes } from '@angular/router';

import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentPage } from './features/students/pages/student-page/student-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page/layouts-page';
import { SignupPage } from './features/signup-page/signup-page';
import { ProfilePage } from './features/profile/pages/profile-page/profile-page';

export const routes: Routes = [

    {path: '',component: HomePage},

    {path: 'student',component: StudentPage},

    {path: 'student/:id',component: StudentDetailPage},

    { path: 'layouts', component: LayoutsPage },

    {path: 'signup',component: SignupPage},

    { path: 'profile', component: ProfilePage },

    // Redireccionamiento
    {path: '**',redirectTo: ''}

];
