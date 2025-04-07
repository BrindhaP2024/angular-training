import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechServiceComponent } from './tech-service.component';

describe('TechServiceComponent', () => {
  let component: TechServiceComponent;
  let fixture: ComponentFixture<TechServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
