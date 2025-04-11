// import { Component, OnInit } from '@angular/core';
// import { of, from, interval, throwError, Observable, timer, pipe, range } from 'rxjs';
// import { map, filter, first, mergeMap, concatMap, switchMap, exhaustMap, take, delay, catchError, tap, reduce, debounceTime, distinctUntilChanged, combineLatest, zip, defaultIfEmpty, find, count, retry, publish, share, skip, takeWhile } from 'rxjs/operators';
// import { ajax } from 'rxjs/ajax';
// import { forkJoin } from 'rxjs';

// @Component({
//   selector: 'app-operators',
//   templateUrl: './operators.component.html',
//   styleUrls: ['./operators.component.scss']
// })
// export class RxjsOperatorsComponent implements OnInit {

//   ngOnInit(): void {
//     this.runRxJSOperators();
//   }

//   runRxJSOperators() {
//     of(1, 2, 3).subscribe(val => console.log('of', val));
//     from([10, 20, 30]).subscribe(val => console.log('from', val));
//     interval(1000).pipe(take(3)).subscribe(val => console.log('interval', val));
//     timer(2000).subscribe(val => console.log('timer done', val));
//     range(1, 5).subscribe(val => console.log('range', val));
//     ajax('https://jsonplaceholder.typicode.com/posts/1').subscribe((res: any) => console.log('ajax', res));  // Specify the type for 'res'

//     of(1, 2, 3).pipe(map(x => x * 10)).subscribe(val => console.log('map', val));
//     of('A', 'B').pipe(concatMap(val => of(val + ' processed').pipe(delay(500)))).subscribe(console.log);
//     of('A', 'B').pipe(mergeMap(val => of(val + ' merged').pipe(delay(500)))).subscribe(console.log);
//     of('A', 'B').pipe(switchMap(val => of(val + ' switched').pipe(delay(500)))).subscribe(console.log);
//     of('A', 'B').pipe(exhaustMap(val => of(val + ' exhausted').pipe(delay(500)))).subscribe(console.log);

//     of(1, 2, 3, 4).pipe(filter(x => x % 2 === 0)).subscribe(val => console.log('even', val));
//     of(100, 200, 300).pipe(first()).subscribe(console.log);
//     interval(1000).pipe(take(3)).subscribe(console.log);
//     from([1, 1, 2, 2, 3]).pipe(distinctUntilChanged()).subscribe(console.log);
//     of(1, 2, 3, 4, 5).pipe(skip(2)).subscribe(console.log);
//     of(10, 20, 30, 40).pipe(takeWhile(val => val < 30)).subscribe(console.log);

//     combineLatest([
//       interval(1000).pipe(take(3)),
//       interval(1500).pipe(take(2))
//     ]).subscribe(console.log);

//     zip(of('a', 'b'), of(1, 2)).subscribe(console.log);
//     forkJoin([of(10).pipe(delay(1000)), of(20)]).subscribe(console.log);

//     // Example with connectable observable
//     const shared$ = interval(1000).pipe(take(3), publish());
//     shared$.subscribe(val => console.log('Subscriber 1:', val));
//     setTimeout(() => shared$.subscribe(val => console.log('Subscriber 2:', val)), 2000);
//     shared$.connect();  // Calling connect() after publishing

//     of('shared').pipe(share()).subscribe(console.log);

//     throwError(() => new Error('Error')).pipe(catchError(err => of('Handled error'))).subscribe(console.log);
//     throwError(() => new Error('Retry error')).pipe(retry(2)).subscribe(console.log);

//     of('Start').pipe(
//       tap(val => console.log('Before', val)),
//       delay(1000),
//       tap(val => console.log('After', val))
//     ).subscribe(console.log);

//     from([]).pipe(defaultIfEmpty('Empty Observable')).subscribe(console.log);
//     of(1, 2, 3).pipe(find(x => x > 2)).subscribe(console.log);

//     of(1, 2, 3).pipe(count()).subscribe(console.log);
//     of(10, 20, 5).pipe(reduce((acc, val) => acc + val, 0)).subscribe(console.log);
//   }
// }
