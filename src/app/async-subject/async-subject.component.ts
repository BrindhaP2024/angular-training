import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  asyncSubject$ = new AsyncSubject<number>();

  ngOnInit(): void {
    this.asyncSubject$.subscribe(val => console.log('Subscriber 1:', val));

    this.asyncSubject$.next(1);
    this.asyncSubject$.next(2);
    this.asyncSubject$.next(3);

    setTimeout(() => {
      this.asyncSubject$.subscribe(val => console.log('Subscriber 2:', val));
    }, 2000);

    this.asyncSubject$.next(4);
    this.asyncSubject$.complete();
  }
}
