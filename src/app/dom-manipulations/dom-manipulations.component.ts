import { Component, ElementRef, ViewChild } from '@angular/core';
import { DirectiveExampleDirective } from './directive-example.directive';
@Component({
  selector: 'app-dom-manipulations',
  imports: [DirectiveExampleDirective],
  templateUrl: './dom-manipulations.component.html',
  styleUrl: './dom-manipulations.component.css'
})
export class DomManipulationsComponent {
  @ViewChild('textElement', { static: true }) textElement!: ElementRef;

  changeColor(): void {
    this.textElement.nativeElement.style.color = 'red';
  }
}
