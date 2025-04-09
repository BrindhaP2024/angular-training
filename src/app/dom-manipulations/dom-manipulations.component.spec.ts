import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomManipulationsComponent } from './dom-manipulations.component';

describe('DomManipulationsComponent', () => {
  let component: DomManipulationsComponent;
  let fixture: ComponentFixture<DomManipulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomManipulationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomManipulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
