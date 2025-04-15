import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'base-listbox',
  template: `
    <p>Base Listbox Value: {{ value }}</p>
  `,
  host: {
    '(keydown)': 'handleKey($event)',
  },
  standalone: true,
})
export class ListboxBaseComponent {
  @Input() value: string = '';

  constructor(private element: ElementRef) {}

  handleKey(event: KeyboardEvent) {
    console.log('Base key pressed:', event.key);
  }

  ngOnInit() {
    console.log('Base ngOnInit called');
  }
}
