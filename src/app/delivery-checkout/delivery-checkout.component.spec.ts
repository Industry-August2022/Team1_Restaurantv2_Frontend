import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCheckoutComponent } from './delivery-checkout.component';

describe('DeliveryCheckoutComponent', () => {
  let component: DeliveryCheckoutComponent;
  let fixture: ComponentFixture<DeliveryCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
