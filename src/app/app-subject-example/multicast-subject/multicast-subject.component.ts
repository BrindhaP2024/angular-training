import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';

@Component({
  selector: 'app-multicast-example',
  template: `<p>Check the console for multicast example</p>`
})
export class MulticastExampleComponent implements OnInit {

  ngOnInit(): void {
    const source$ = from([1, 2, 3]);
    const subject = new Subject<number>();

    const multicasted$ = source$.pipe(multicast(() => subject));

    multicasted$.subscribe({
      next: (v) => console.log('Observer A:', v),
      complete: () => console.log('Observer A: complete')
    });

    multicasted$.subscribe({
      next: (v) => console.log('Observer B:', v),
      complete: () => console.log('Observer B: complete')
    });

    const connection = (multicasted$ as any).connect();

  }
}
      