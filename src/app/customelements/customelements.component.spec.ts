import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomelementsComponent } from './customelements.component';

describe('CustomelementsComponent', () => {
  let component: CustomelementsComponent;
  let fixture: ComponentFixture<CustomelementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomelementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
