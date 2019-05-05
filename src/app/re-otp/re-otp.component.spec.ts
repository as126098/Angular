import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReOTPComponent } from './re-otp.component';

describe('ReOTPComponent', () => {
  let component: ReOTPComponent;
  let fixture: ComponentFixture<ReOTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReOTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
