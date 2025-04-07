import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  imports: [FormsModule],
})
export class EventComponent {
  name: string = '';
  message: string = 'Fill out';

  onFocus(): void {
    this.message = 'You focused on the input!';
  }

  onBlur(): void {
    this.message = 'You left the input field!';
  }

  onKeyUp(): void {
    this.message = `Typing: ${this.name}`;
  }

  onEnter(event: KeyboardEvent): void {
    if (event.key ==='enter') {
      this.message = 'Ctrl key is pressed!';
      console.log('Ctrl is pressed');
    } else {
      this.message = 'Ctrl key is not pressed!';
    }
  }

  onSubmit(): void {
    this.message = `Form submitted with name: ${this.name}`;
  }
}
