import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'dashboard',
  },
  {
    path: 'user',
    component: UserComponent,
    title: 'User',
  },
];
