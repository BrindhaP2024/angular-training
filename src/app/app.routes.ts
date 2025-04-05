import { Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { sampleguardGuard } from './sampleguard.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  {
    path: 'one',
    component: OneComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'HomePage',
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'Aboutpage',
      },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: 'two', component: TwoComponent },
  {
    path: 'user/:userID',
    canActivate: [sampleguardGuard],
    loadComponent: () => import('./user/user.component').then((m) => m.UserComponent),
  },
  { path: '**', component: NotFoundComponent },
];
