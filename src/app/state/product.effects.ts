import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../service/product.service';
import { addProduct,addProductSuccess,loadProducts,loadProductsSuccess,
  updateProduct,
  updateProductSuccess,
  deleteProduct,
  deleteProductSuccess
} from './product.action';
import { mergeMap, map } from 'rxjs/operators';
import { inject } from '@angular/core';

@Injectable()
export class ProductEffects {
  private actions = inject(Actions);
  private productService = inject(ProductService);

  loadProducts = createEffect(() =>
    this.actions.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map(products => loadProductsSuccess({ products }))
        )
      )
    )
  );

  addProduct = createEffect(() => this.actions.pipe(ofType(addProduct),

  mergeMap(action =>
        this.productService.addProduct(action.product).pipe(
          map(product => addProductSuccess({ product }))

        )
      )
    )
  );

  updateProduct = createEffect(() =>
    this.actions.pipe(
      ofType(updateProduct),
      mergeMap(action =>
        this.productService.updateProduct(action.product).pipe(
          map(product => updateProductSuccess({ product }))
        )
      )
    )
  );

  deleteProduct = createEffect(() =>
    this.actions.pipe(
      ofType(deleteProduct),
      mergeMap(action =>
        this.productService.deleteProduct(action.id).pipe(
          map(() => deleteProductSuccess({ id: action.id }))
        )
      )
    )
  );
}
