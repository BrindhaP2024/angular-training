import { createReducer, on } from '@ngrx/store';
import { Product } from '../../model/product.model';
import {
  addProductSuccess,
  loadProductsSuccess,
  updateProductSuccess,
  deleteProductSuccess
} from './product.action';

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: []
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products
  })),
  on(addProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product]
  })),
  on(updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map(p => p.id === product.id ? product : p)
  })),
  on(deleteProductSuccess, (state, { id }) => ({
    ...state,
    products: state.products.filter(p => p.id !== id)
  }))
);
