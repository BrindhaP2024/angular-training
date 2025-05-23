import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContainerRefComponent } from './view-container-ref.component';

describe('ViewContainerRefComponent', () => {
  let component: ViewContainerRefComponent;
  let fixture: ComponentFixture<ViewContainerRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewContainerRefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContainerRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
