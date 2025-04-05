import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, PercentPipe, JsonPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe } from '@angular/common';
import { CamelcasePipe } from './camelcase.pipe';
@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, PercentPipe, JsonPipe, LowerCasePipe,TitleCasePipe,SlicePipe,CamelcasePipe],
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  text = 'Pipes Example';
  price = 140.0545;
  purchasedOn = new Date('2025-01-29');
  name1 = 'Aspire';
  name2 = 'Systems';

  discount = 0.200;
  users = [
    { name: 'Brindha', age: 23, email: 'brindha@yahoo.com' },
    { name: 'Saranya', age: 25, email: 'saranya@example.com' },
    { name: 'Saran', age: 35, email: 'saran@gmail.com' }
  ];

  isLoggedIn: boolean = true;
  hasPermission: boolean = false;
  isAdmin = true;
  quantity: number = 3;
  discountedPrice: number = 1200;
}
