import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSimpleObservableComponent } from './app-simple-observable.component';

describe('AppSimpleObservableComponent', () => {
  let component: AppSimpleObservableComponent;
  let fixture: ComponentFixture<AppSimpleObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSimpleObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSimpleObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
