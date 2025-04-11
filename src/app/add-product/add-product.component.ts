import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct } from '../../state/product.action';
import { Product } from '../../../model/product.model';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productName = '';
  productPrice = 0;

  constructor(private store: Store) {}

  addProduct() {
    if (!this.productName || this.productPrice <= 0) return;

    const newProduct: Product = {
      id: Math.floor(Math.random() * 1000),
      name: this.productName,
      price: this.productPrice
    };

    this.store.dispatch(addProduct({ product: newProduct }));
    this.productName = '';
    this.productPrice = 0;
  }
}
