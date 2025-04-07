import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  inStock: boolean;
}
@Component({
  selector: 'app-control-flow',
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})

export class ControlFlowComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', description: 'A high-performance laptop.', category: 'electronics', inStock: true },
    { id: 2, name: 'T-Shirt', description: 'A comfortable cotton t-shirt.', category: 'clothing', inStock: false },
    { id: 3, name: 'Chair', description: 'A stylish ergonomic chair.', category: 'furniture', inStock: true },
    { id: 4, name: 'Smartphone', description: 'A smartphone with excellent camera quality.', category: 'electronics', inStock: true },
    { id: 5, name: 'Sofa', description: 'A cozy and spacious sofa.', category: 'furniture', inStock: false },
  ];

  trackById(index: number, product: Product): number {
    return product.id;
  }
}
