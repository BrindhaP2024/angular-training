import { Component, ElementRef, Input } from '@angular/core';
import { ListboxBaseComponent } from '../base-listbox/base-listbox.component';

@Component({
  selector: 'custom-listbox',
  template: `
    <div tabindex="0">
      <h3>Custom Listbox</h3>
      <p>Value: {{ value }}</p>
      <p *ngIf="disabled">Component is disabled</p>
    </div>
  `,
  host: {
    '(click)': 'focusActiveOption()',
  },
  standalone: true,
  imports: [],
})
export class CustomListboxComponent extends ListboxBaseComponent {
  @Input() disabled = false;

  constructor(element: ElementRef) {
    super(element);
  }

  focusActiveOption() {
    if (!this.disabled) {
      console.log('Focusing active option...');
    }
  }

  override ngOnInit() {
    super.ngOnInit();
    console.log('Custom ngOnInit called');
  }
}
