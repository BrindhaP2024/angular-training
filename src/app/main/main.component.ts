import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './main.component.html',
  styles: [`
    p {
      color: black;
      background-color: pink;
    }
  `],
  encapsulation:ViewEncapsulation.Emulated
})
export class MainComponent { }
