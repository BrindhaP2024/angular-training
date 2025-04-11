import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../model/product.model';
import { loadProducts, addProduct, updateProduct, deleteProduct } from '../../state/product.action';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { selectAllProducts } from '../../state/product.selectors';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  productName = '';
  productPrice = 0;
  editingProduct: Product | null = null;

  constructor(private store: Store) {
    this.products = this.store.select(selectAllProducts);
  }

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }

  addProduct() {
    if (!this.productName || this.productPrice <= 0) return;

    const newProduct: Product = {
      id: Math.floor(Math.random() * 1000),
      name: this.productName,
      price: this.productPrice
    };

    this.store.dispatch(addProduct({ product: newProduct }));
    this.resetForm();
  }

  editProduct(product: Product) {
    this.editingProduct = { ...product };
    this.productName = product.name;
    this.productPrice = product.price;
  }

  saveProduct() {
    if (this.editingProduct) {
      const updatedProduct: Product = {
        ...this.editingProduct,
        name: this.productName,
        price: this.productPrice
      };

      this.store.dispatch(updateProduct({ product: updatedProduct }));
      this.resetForm();
    }
  }

  deleteProduct(productId: number) {
    this.store.dispatch(deleteProduct({ id: productId }));
  }

  private resetForm() {
    this.editingProduct = null;
    this.productName = '';
    this.productPrice = 0;
  }
}
