import { Component, HostBinding, HostListener } from '@angular/core';


@Component({
  selector: 'app-hostname-example',
  imports: [],
  templateUrl: './hostname-example.component.html',
  styleUrl: './hostname-example.component.css',
  host: {
  'role': 'slider',
  '[attr.aria-valuenow]': 'value',
  '[class.active]': 'isActive()',
  '[tabIndex]': 'disabled ? -1 : 0',
  '(keydown)': 'updateValue($event)',
  }
})
export class HostnameExampleComponent {
  value: number = 10;
  disabled: boolean = false;
  private _isActive: boolean = false;

  @HostBinding('class.active')
  get isActive() {
    return this._isActive;
  }

  @HostListener('click')
  toggleActive() {
    this._isActive = !this._isActive;
  }

  @HostListener('keydown', ['$event'])
  updateValue(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      this.value++;
    } else if (event.key === 'ArrowDown') {
      this.value--;
    }
  }

}
