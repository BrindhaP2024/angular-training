import { Component, Input, input, model } from '@angular/core';

@Component({
  selector: 'app-input-data',
  imports: [],
  templateUrl: './input-data.component.html',
  styleUrl: './input-data.component.css'
})
export class InputDataComponent {
  value = input(0);

  value1 = input<String>('name');
  // value3 = input.required<number>();
  value11= input(0,{alias:'changevalue'})
  valueModel = model(0);
  @Input() valueInput = 0;
  

  increment(){
    this.valueModel.update((oldValue: number) => oldValue +10)
  }

}
