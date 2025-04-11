import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-behaviour-subject',
  imports: [],
  templateUrl: './behaviour-subject.component.html',
  styleUrl: './behaviour-subject.component.css'
})
export class BehaviourSubjectComponent {
  behaviorSubject$ = new BehaviorSubject<number>(23);

  ngOnInit(): void {
    this.behaviorSubject$.subscribe(val => console.log('Subscriber 1:', val));

    this.behaviorSubject$.next(24);
    this.behaviorSubject$.next(25);

    setTimeout(() => {
      this.behaviorSubject$.subscribe(val => console.log('Subscriber 2:', val));
    }, 2000);

    this.behaviorSubject$.next(3);
  }
}
