import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvSignalComponent } from './adv-signal.component';

describe('AdvSignalComponent', () => {
  let component: AdvSignalComponent;
  let fixture: ComponentFixture<AdvSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
