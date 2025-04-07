import { Component, ViewChild } from '@angular/core';
import { TemplatereferenceComponent } from '../templates/templatereference/templatereference.component';

@Component({
  selector: 'app-home',
  imports: [TemplatereferenceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild(TemplatereferenceComponent) child!: TemplatereferenceComponent;

  callGreetingTemplate() {
    this.child.showTemplate('greeting');
  }

  callFarewellTemplate() {
    this.child.showTemplate('farewell');
  }
}
