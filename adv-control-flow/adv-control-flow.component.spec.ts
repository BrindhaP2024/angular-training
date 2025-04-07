import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvControlFlowComponent } from './adv-control-flow.component';

describe('AdvControlFlowComponent', () => {
  let component: AdvControlFlowComponent;
  let fixture: ComponentFixture<AdvControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvControlFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
