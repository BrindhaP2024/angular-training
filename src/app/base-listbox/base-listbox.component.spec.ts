import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseListboxComponent } from './base-listbox.component';

describe('BaseListboxComponent', () => {
  let component: BaseListboxComponent;
  let fixture: ComponentFixture<BaseListboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseListboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
