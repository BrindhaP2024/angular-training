import { Component } from '@angular/core';
import {CurrencyPipe,DatePipe,PercentPipe,JsonPipe,UpperCasePipe,LowerCasePipe,
  TitleCasePipe,SlicePipe,DecimalPipe,I18nPluralPipe,I18nSelectPipe,KeyValuePipe,
  CommonModule
} from '@angular/common';

import { CamelcasePipe } from './camelcase.pipe';
import { PhoneMaskPipe } from "./phone.pipe";
import { delay, Observable, of } from 'rxjs';


@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    PercentPipe,
    JsonPipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    DecimalPipe,
    I18nPluralPipe,
    I18nSelectPipe,
    KeyValuePipe,
    CamelcasePipe,
    CommonModule, PhoneMaskPipe],
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  usersObs: Observable<string[]> = of(['HTML', 'CSS', 'JS','ANGULAR','NODE JS','EXPRESS JS']);

  text = 'Pipes Example';
  price = 140.0545;
  purchasedOn = new Date('2025-04-4');
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


  items = ['Apple', 'samsung', 'Nokia'];
  itemsMap = {
    '=0': 'No items',
    '=1': 'One item',
    '=2': 'Two items',
    'other': '# items',

  };

  // I18nSelectPipe
  userRole = 'Administrator';
  role = {
    'admin': 'Administrator',
    'user': 'Standard User',
    'guest': 'Guest User'
  };

  userDetails = {
    name: 'Brindha',
    email: 'brindha@gmail.com',
    age: 30
  };


}
