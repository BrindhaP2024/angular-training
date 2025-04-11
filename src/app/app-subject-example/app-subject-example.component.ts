import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-example',
  template: `<p>Check the console for Subject example</p>`,

})
export class SubjectExampleComponent implements OnInit {

  ngOnInit(): void {
    const subject = new Subject<number>();
    setTimeout(()=>{
      subject.subscribe(val => console.log('Subscriber 1:', val));

      subject.next(1);
      subject.next(2);

      subject.subscribe(val => console.log('Subscriber 2:', val));

      subject.next(3);
      subject.next(4);

    },3000)
  }

}
