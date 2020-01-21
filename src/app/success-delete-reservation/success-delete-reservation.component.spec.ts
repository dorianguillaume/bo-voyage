import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDeleteReservationComponent } from './success-delete-reservation.component';

describe('SuccessDeleteReservationComponent', () => {
  let component: SuccessDeleteReservationComponent;
  let fixture: ComponentFixture<SuccessDeleteReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessDeleteReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessDeleteReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
