import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from "../data-binding/data-binding.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule, DataBindingComponent,CommonModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {
  name:String = '';
  email:String = '';
  initialCount: number = 0;

  rating = model<number>(0);

    stars = [1, 2, 3, 4, 5];

    setRating(value: number) {
      this.rating.set(value);
    }
}
