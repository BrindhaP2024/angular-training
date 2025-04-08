import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataDecoratorComponent } from './input-data-decorator.component';

describe('InputDataDecoratorComponent', () => {
  let component: InputDataDecoratorComponent;
  let fixture: ComponentFixture<InputDataDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDataDecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDataDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
