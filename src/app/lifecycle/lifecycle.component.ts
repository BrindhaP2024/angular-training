
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lifecycle',
  imports:[CommonModule],
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name: string = '';
  lifecycleLog: string[] = [];

  constructor(private routes:ActivatedRoute) {

    this.routes.queryParams.subscribe((params: any) => console.log(params));
    this.routes.fragment.subscribe((fragment: any) => console.log(fragment));

    this.logLifecycleEvent('Constructor');
  }

  ngOnInit(): void {
    this.logLifecycleEvent('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logLifecycleEvent('ngOnChanges');
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      this.logLifecycleEvent(`Previous ${inputName} == ${inputValues.previousValue}`);
      this.logLifecycleEvent(`Current ${inputName} == ${inputValues.currentValue}`);
      this.logLifecycleEvent(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }

  ngDoCheck(): void {
    this.logLifecycleEvent('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.logLifecycleEvent('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logLifecycleEvent('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logLifecycleEvent('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logLifecycleEvent('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logLifecycleEvent('ngOnDestroy');
  }

  private logLifecycleEvent(event: string): void {
    this.lifecycleLog.push(event);
    console.log(event);
  }

}
