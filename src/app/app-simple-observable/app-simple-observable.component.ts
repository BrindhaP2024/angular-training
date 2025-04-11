import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-simple-observable',
  template: `
    <div style="text-align: center; padding: 40px;">
      <h2>Simple Number Stream with Observer</h2>
      <p ngIf="value !== null">Current Value: {{ value }}</p>
      <button (click)="startStream()">Start</button>
      <button (click)="stopStream()">Stop</button>
    </div>
  `
})
export class SimpleObservableComponent implements OnDestroy {
  value: number | null = null;
  private subscription?: Subscription;

  // Custom Observer with next, error, and complete callbacks
  private observer = {
    next: (val: number) => {
      console.log('Observer got a next value: ' + val);
      this.value = val;
    },
    error: (err: any) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification')
  };

  startStream() {
    const numberObservable = new Observable<number>((subscriber) => {
      let count = 1;

      const intervalId = setInterval(() => {
        subscriber.next(count++);

        if (count >3) {
          subscriber.complete();
          clearInterval(intervalId);
        }

        if (count === 4) {
          subscriber.error('Something went wrong!');
          clearInterval(intervalId);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    });

    this.subscription = numberObservable.subscribe(this.observer);
  }

  stopStream() {
    this.subscription?.unsubscribe();
    console.log('Unsubscribed from number stream');
  }

  ngOnDestroy(): void {
    this.stopStream();
  }
}
