import { Component, OnInit } from '@angular/core';
import {
  of, from, interval, throwError, timer, forkJoin, zip, combineLatest, Observable, pipe
} from 'rxjs';
import {
  map, filter, first, mergeMap, concatMap, switchMap, exhaustMap, take, delay,
  catchError, tap, reduce, debounceTime, distinctUntilChanged,
  defaultIfEmpty, find, count,
  scan
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {

  ngOnInit(): void {
    this.runRxJSOperators();
  }

  runRxJSOperators() {
    console.log(' Running RxJS Operators\n');

    of(1, 2, 3).subscribe(val => console.log('of:', val));
    from([10, 20, 30]).subscribe(val => console.log('from:', val));
    interval(1000).pipe(take(3)).subscribe(val => console.log('interval:', val));
    timer(2000).subscribe(val => console.log('timer done:', val));

    of(1, 2, 3).pipe(
      map(x => x * 10)
    ).subscribe(val => console.log('map:', val));

    of('A', 'B').pipe(
      concatMap(val => of(val + ' concatMap').pipe(delay(500)))
    ).subscribe(console.log);

    of('A', 'B').pipe(
      mergeMap(val => of(val + ' mergeMap').pipe(delay(500)))
    ).subscribe(console.log);

    of('A', 'B').pipe(
      switchMap(val => of(val + ' switchMap').pipe(delay(500)))
    ).subscribe(console.log);
    of(1, 2, 3).pipe(
      mergeMap(val =>
        of('A', 'B').pipe(
          mergeMap(innerVal => of(`${val} - ${innerVal} mergeMap`).pipe(delay(500)))
        )
      )
    ).subscribe(console.log);

    // Using switchMap
    of(1, 2, 3).pipe(
      switchMap(val =>
        of('A', 'B').pipe(
          switchMap(innerVal => of(`${val} - ${innerVal} switchMap`).pipe(delay(500)))
        )
      )
    ).subscribe(console.log);
    of('A', 'B').pipe(
      exhaustMap(val => of(val + ' exhaustMap').pipe(delay(500)))
    ).subscribe(console.log);

    of(1, 2, 3, 4).pipe(
      filter(x => x % 2 === 0)
    ).subscribe(val => console.log('filter even:', val));

    of(100, 200, 300).pipe(
      first()
    ).subscribe(val => console.log('first:', val));

    interval(1000).pipe(
      take(3)
    ).subscribe(val => console.log('take 3:', val));

    from([1, 1, 2, 2, 3]).pipe(
      distinctUntilChanged()
    ).subscribe(val => console.log('distinctUntilChanged:', val));

    const obs1 = interval(1000).pipe(take(3));
    const obs2 = interval(1500).pipe(take(2));

    combineLatest([obs1, obs2] as const).subscribe(
      ([val1, val2]) => console.log('combineLatest:', val1, val2)
    );

    zip([of('a', 'b'), of(1, 2)] as const).subscribe(
      ([a, b]) => console.log('zip:', a, b)
    );

    forkJoin([
      of(10).pipe(delay(1000)),
      of(20)
    ] as const).subscribe(([val1, val2]) => console.log('forkJoin:', val1, val2));

    throwError(() => new Error(' wrong')).pipe(
      catchError(err => of(' Caught error'))
    ).subscribe(console.log);

    of('Start').pipe(
      tap(val => console.log('Before tap:', val)),
      delay(1000),
      tap(val => console.log('After tap:', val))
    ).subscribe(console.log);

    from([]).pipe(
      defaultIfEmpty('Empty stream')
    ).subscribe(console.log);

    of(1, 2, 3).pipe(
      find(x => x > 2)
    ).subscribe(val => console.log('find > 2:', val));

    of(10, 20, 30).pipe(
      count()
    ).subscribe(val => console.log('count:', val));

    of(1, 2, 3).pipe(
      scan((acc, val) => acc + val, 0)
    ).subscribe(val => console.log('reduce (sum):', val));

    function doubleEven() {
      return pipe(
        filter((val: number) => val % 2 === 0),
        map(val => val * 2)
      );
    }

    of(1, 2, 3, 4).pipe(
      doubleEven()
    ).subscribe(val => console.log('custom doubleEven:', val));

    function myDelay<T>(ms: number) {
      return (source$: Observable<T>) => new Observable<T>((subscriber) => {
          const sub = source$.subscribe({
            next: val => setTimeout(() => subscriber.next(val), ms),
            error: err => subscriber.error(err),
            complete: () => setTimeout(() => subscriber.complete(), ms)
          });
          return () => sub.unsubscribe();
        });
    }

    of('Hello').pipe(
      myDelay(1000)
    ).subscribe(val => console.log('myDelay:', val));

    of('url1', 'url2').pipe(
      map(url => of(`response from ${url}`).pipe(delay(500))),
      mergeMap(res$ => res$)
    ).subscribe(val => console.log('flattened:', val));
  }
}
