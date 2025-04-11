import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerExampleComponent } from './scheduler-example.component';

describe('SchedulerExampleComponent', () => {
  let component: SchedulerExampleComponent;
  let fixture: ComponentFixture<SchedulerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulerExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
