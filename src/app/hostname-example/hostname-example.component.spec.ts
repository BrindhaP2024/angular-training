import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostnameExampleComponent } from './hostname-example.component';

describe('HostnameExampleComponent', () => {
  let component: HostnameExampleComponent;
  let fixture: ComponentFixture<HostnameExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostnameExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostnameExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
