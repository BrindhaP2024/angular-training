import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSubjectExampleComponent } from './app-subject-example.component';

describe('AppSubjectExampleComponent', () => {
  let component: AppSubjectExampleComponent;
  let fixture: ComponentFixture<AppSubjectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSubjectExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSubjectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
