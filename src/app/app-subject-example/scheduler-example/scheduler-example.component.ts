import { Component, OnInit } from '@angular/core';
import { of, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

@Component({
  selector: 'app-scheduler-example',
  templateUrl: './scheduler-example.component.html',
  styleUrls: ['./scheduler-example.component.css']
})
export class SchedulerExampleComponent implements OnInit {

  ngOnInit(): void {
    this.schedulerExample();
  }

  schedulerExample() {
    console.log('Before subscribing');

    of(1, 2, 3).pipe(
      observeOn(asyncScheduler)
    ).subscribe(val => console.log('Received:', val));

    console.log('After subscribing');
  }
}
