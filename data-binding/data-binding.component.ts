import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports:[CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  title = 'Angular Data Binding Example';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isDisabled = true;
  ariaLabel = 'Angular Logo';
  colspanValue = 2;
  backgroundColor = 'lightblue';
  isHighlight = true;

  toggleHighlight() {
    this.isHighlight = !this.isHighlight;
    this.backgroundColor = this.isHighlight ? 'lightgreen' : 'lightcoral';
  }

  @Input() data: number = 0;
  @Output() dataChange: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.data++;
    this.dataChange.emit(this.data);
  }

  decrement() {
    this.data--;
    this.dataChange.emit(this.data);
  }
}
