import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EventComponent } from "./templates/event/event.component";
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from "./templates/two-way-binding/two-way-binding.component";
import { DataBindingComponent } from "./templates/data-binding/data-binding.component";
import { NgContentComponent } from "./templates/ng-content/ng-content.component";
import { TemplatereferenceComponent } from "./templates/templatereference/templatereference.component";
import { MultiplyPipe } from "./multiply.pipe";

import { UserComponent } from "./user/user.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { TemplateVariableComponent } from "./templates/template-variable/template-variable.component";

@Component({
  selector: 'app-root',
  preserveWhitespaces:true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, TwoWayBindingComponent, NgContentComponent, MultiplyPipe, HomeComponent, CommonModule, TemplateVariableComponent],
  templateUrl: './app.component.html',
  styles: `
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
    color: #1e293b;
  }
  `
})
export class AppComponent {
  title = 'angular_training';
  userRating = 3;
  showHomeComponent = false;

  toggleHomeComponent() {
    this.showHomeComponent = !this.showHomeComponent;
  }

}
