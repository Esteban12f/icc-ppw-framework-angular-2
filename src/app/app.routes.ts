import { Routes } from '@angular/router';

import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentPage } from './features/students/pages/student-page/student-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';

export const routes: Routes = [

    {path: '',component: HomePage},

    {path: 'student',component: StudentPage},

    {path: 'student/:id',component: StudentDetailPage},

    // Redireccionamiento
    {path: '**',redirectTo: ''}

];
