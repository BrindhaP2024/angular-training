import { Component } from '@angular/core';

@Component({
  selector: 'app-adv-control-flow',
  imports: [],
  standalone:true,
  templateUrl: './adv-control-flow.component.html',
  styleUrl: './adv-control-flow.component.css'
})
export class AdvControlFlowComponent {
  user = {
    isLoggedIn: true,
    isGuest: false,
    name: 'Brindha ',
    role: 'editor'
  };

  items = [
    { id: 1, name: 'Item A', description: 'Description of Item A' },
    { id: 2, name: 'Item B', description: 'Description of Item B' },
    { id: 3, name: 'Item c', description: 'Description of Item C' }

  ];
}

