import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  imports: [],
  templateUrl: './template-variable.component.html',
  styleUrl: './template-variable.component.css'
})
export class TemplateVariableComponent {
  user = {
    isLoggedIn: true,
    isGuest: false,
    name: 'Brindha',
    role: 'admin'
  };

  items = [
    { id: 1, name: 'Item One', description: 'Description 1' },
    { id: 2, name: 'Item Two', description: 'Description 2' },
    { id: 3, name: 'Item Three', description: 'Description 3' }
  ];

  submit(name: string) {
    console.log('Submitted name:', name);
  }

}
