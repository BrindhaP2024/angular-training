import { CommonModule } from '@angular/common';
import { Component, computed, effect, linkedSignal, signal, untracked } from '@angular/core';
import _ from 'lodash';
interface Product{
  id:number,
  name:string,
  price:number;
}
@Component({
  selector: 'app-adv-signal',
  imports: [CommonModule],
  templateUrl: './adv-signal.component.html',
  styleUrl: './adv-signal.component.css'
})
export class AdvSignalComponent {
  name = signal([''], { equal: _.isEqual });
  mark = signal(0);

  products = signal<Product[]>([
    { id: 0, name: 'Laptop', price: 1000 },
    { id: 1, name: 'Smartphone', price: 800 },
    { id: 2, name: 'Tablet', price: 600 },
  ]);

  updateName(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.value !== null && input.value !== undefined) {
      this.name.set([input.value]);
      console.log('Name updated:', input.value);
    } else {
      console.log('Name input is null or undefined');
    }
  }

  updateMark(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
    if (!isNaN(value)) {
      this.mark.set(value);
      console.log('Mark updated:', value);
    } else {
      console.log('Invalid number input');
    }
  }

  finalOutcome = computed(() => {
    const nameValue = this.name()[0];
    const markValue = this.mark();
    return nameValue
      ? `${nameValue} has scored ${markValue}.`
      : `Enter the details`;
  });

  finalOutcomeEffect = effect((onCleanup) => {
    const nameValue = this.name()[0];
    const markValue = untracked(this.mark);
    console.log('Effect triggered:', `${nameValue} (Mark untracked: ${markValue})`);

    const timer = setTimeout(() => {
      console.log(`1 second ago, ${nameValue} had an untracked mark of ${markValue}`);
    }, 1000);

    onCleanup(() => {
      clearTimeout(timer);
      console.log('Effect cleanup executed.');
    });
  });
  //linked signal here
  selectedProduct = linkedSignal<Product[], Product>({
    source: this.products,
    computation: (newProducts, previous) => {
      return (
        newProducts.find((product) => product.id === previous?.value.id) ??
        newProducts[1]
      );
    },
  });

  selectProduct(index: number) {
    this.selectedProduct.set(this.products()[index]);
  }

}
