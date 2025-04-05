import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-one',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {

}
