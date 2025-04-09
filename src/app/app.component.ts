import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { TwoWayBindingComponent } from './templates/two-way-binding/two-way-binding.component';
import { NgContentComponent } from './templates/ng-content/ng-content.component';
import { TemplateVariableComponent } from './templates/template-variable/template-variable.component';
import { ExampleComponent } from './templates/example/example.component';
// import { DomManipulationsComponent } from './dom-manipulations/dom-manipulations.component';
import { UserService } from './user.service';
// import { LogService } from './log.service';
// import { InterceptorComponent } from "./interceptor/interceptor.component";
import { LogService } from './log.service';
import { TechServiceComponent } from "./tech-service/tech-service.component";
import { DomManipulationsComponent } from "./dom-manipulations/dom-manipulations.component";
import { ReactiveFormComponent } from "./reactive-driven/reactive-driven.component";
// import { InputDataDecoratorComponent } from "./input-data-decorator/input-data-decorator.component";
// import { OutputDataComponent } from "./output-data/output-data.component";


@Component({
  selector: 'app-root',
  preserveWhitespaces: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule,
    TwoWayBindingComponent,
    NgContentComponent,
    HomeComponent,
    TemplateVariableComponent,
    ExampleComponent,
    DomManipulationsComponent,
    ReactiveFormComponent
],
  templateUrl: './app.component.html',
  styles: [
    `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      nav {
        background-color: #1e293b;
        padding: 1rem;
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      nav a {
        color: #f1f5f9;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      nav a:hover {
        background-color: #334155;
        color: white;
      }

      nav a.active {
        background-color: #0ea5e9;
        color: white;
        font-weight: bold;
      }

      h2 {
        margin: 1rem;
        font-size: 1.5rem;
        color:rgb(93, 118, 159);
      }
    `
  ]
})
export class AppComponent {
  private logger = inject(LogService);
  private userService = inject(UserService);

  title = 'angular_training';
  userRating = 3;
  showHomeComponent = false;

  constructor() {
    this.logger.log(`User: ${this.userService?.user?.name || 'Name not provided'}`);
  }

  toggleHomeComponent() {
    this.showHomeComponent = !this.showHomeComponent;
  }
}
