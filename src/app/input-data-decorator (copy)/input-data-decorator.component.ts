import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-data-decorator',
  templateUrl: './input-data-decorator.component.html',
  styleUrls: ['./input-data-decorator.component.css']
})
export class InputDataDecoratorComponent {
  @Input() name: string = 'Unnamed Product';
  @Input() price: number = 0.0;
  @Input() description: string = 'No description provided';
  @Input() isAvailable: boolean = true;
  @Input('productName') nameAlias: string = '';

  isOn = false;

  @Output() toggled = new EventEmitter<boolean>();
  @Output() stateChanged = new EventEmitter<boolean>();

  toggle(): void {
    this.isOn = !this.isOn;
    this.toggled.emit(this.isOn);
    this.stateChanged.emit(this.isOn);
    console.log(ToggleEvent)
  }
}
