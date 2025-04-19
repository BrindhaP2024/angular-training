import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  replaySubject$ = new ReplaySubject<number>(2, 3000);
  // Stores last 2 values and replays for 3 seconds

  ngOnInit(): void {
    this.replaySubject$.next(1);
    setTimeout(() => this.replaySubject$.next(2), 1000);
    setTimeout(() => this.replaySubject$.next(3), 2000);
    setTimeout(() => this.replaySubject$.next(4), 4000);

    this.replaySubject$.subscribe(val => console.log('Subscriber 1:', val));

    setTimeout(() => {
      this.replaySubject$.subscribe(val => console.log('Subscriber 2:', val));
    }, 5000);
  }
}
