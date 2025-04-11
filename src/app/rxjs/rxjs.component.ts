// click-tracker.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subject, asyncScheduler, Subscription } from 'rxjs';
import {map,scan,debounceTime,observeOn,tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  template: `
    <div class="container">
      <h2>Click anywhere to track X position!</h2>
      <p>Total X: {{ totalX }}</p>
    </div>
  `,
  styles: [`
    .container {
      padding: 50px;
      border: 2px dashed #888;
      text-align: center;
    }
  `]
})
export class ClickTrackerComponent implements OnInit, OnDestroy {
  totalX = 0;

  private clickSubject = new Subject<number>();
  private subscriptions = new Subscription();

  ngOnInit() {

    const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
      debounceTime(500),
      map(event => event.clientX),
      observeOn(asyncScheduler),
      scan((acc, clientX) => acc + clientX, 0),
      tap(x => console.log('Emitting totalX via Subject:', x))
    );

    const sub1 = click$.subscribe(this.clickSubject);

    const sub2 = this.clickSubject.subscribe(total => {
      this.totalX = total;
    });

    const sub3 = this.clickSubject.subscribe(total => {
      console.log('Observer 2: Total X is', total);
    });

    this.subscriptions.add(sub1);
    this.subscriptions.add(sub2);
    this.subscriptions.add(sub3);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
