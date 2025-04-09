import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Injector, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-customelements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customelements.component.html',
  styleUrls: ['./customelements.component.css']
})
export class CustomelementsComponent {
  @Input() Input = 'Angular Calculator Component';
  @Output() output = new EventEmitter<number>();
  @Input() name = '';
  @Input() email = '';
  @Input() role = '';

  number1 = 0;
  number2 = 0;
  result = 0;

  constructor(private injector: Injector) {
    const userCardElement = createCustomElement(CustomelementsComponent, { injector });
    customElements.define('user-card', userCardElement);
  }

  add(): void {
    this.result = this.number1 + this.number2;
    this.output.emit(this.result);
  }

  subtract(): void {
    this.result = this.number1 - this.number2;
    this.output.emit(this.result);
  }

  multiply(): void {
    this.result = this.number1 * this.number2;
    this.output.emit(this.result);
  }

  divide(): void {
    this.result = this.number1 / this.number2;
    this.output.emit(this.result);
  }
}
