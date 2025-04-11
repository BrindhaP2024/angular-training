// import { ReactiveDrivenComponent } from './../reactive-driven/reactive-driven.component';
// import { TdfFormComponent } from './tdf-form/tdf-form.component';
import { Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { PipesComponent } from './pipes/pipes.component';

import { DataBindingComponent } from './templates/data-binding/data-binding.component';
import { TwoWayBindingComponent } from './templates/two-way-binding/two-way-binding.component';
import { AdvControlFlowComponent } from './templates/adv-control-flow/adv-control-flow.component';
import { TemplatereferenceComponent } from './templates/templatereference/templatereference.component';
import { NgContainerExampleComponent } from './templates/ng-container-example/ng-container-example.component';
import { EventComponent } from './templates/event/event.component';
// import { ServiceusageComponent } from './serviceusage/serviceusage.component';
// import { RdfComponent } from './rdf/rdf.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'one',
    pathMatch: 'full'
  },
  {
    path: 'one',
    component: OneComponent,
    // canActivateChild: [canActivateChildGuard],
    children: [
      {
        path: 'about',
        component: AboutComponent,
        title: 'About Page'
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page'
      }
    ]
  },
  {
    path: 'two',
    component: TwoComponent,
    title: 'Two Page',
    // canActivate: [CanActivateGuard]
  },
  {
    path: 'user/:userID',
    loadComponent: () =>
      import('./user/user.component').then((m) => m.UserComponent),
    title: 'User Profile'
  },
  {
    path: 'pipes',
    component: PipesComponent,
    title: 'Pipes'
  },

  {
    path: 'data-binding',
    component: DataBindingComponent,
    title: 'Data Binding'
  },
  {
    path: 'two-way-binding',
    component: TwoWayBindingComponent,
    title: 'Two Way Binding'
  },
  {
    path: 'event',
    component: EventComponent,
    title: 'events'
  },
  {
    path: 'adv-control-flow',
    component: AdvControlFlowComponent,
    title: 'Advanced Control Flow'
  },
  {
    path: 'template-ref',
    component: TemplatereferenceComponent,
    title: 'Template Reference'
  },
  {
    path: 'ng-container',
    component: NgContainerExampleComponent,
    title: 'NgContainer Example'
  },
  // {path:'service-usage',
  //  component:ServiceusageComponent
  // },
//   {path:'tdf',
//     // component:TdfFormComponent
//   },
//   {path:'rdf',
//     // component:ReactiveDrivenComponent
//   },
//  { path:'rdf1',
//   // component:RdfComponent
//  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 - Not Found'
  }
];
