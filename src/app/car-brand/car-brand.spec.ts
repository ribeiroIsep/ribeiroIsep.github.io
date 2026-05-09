import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBrand } from './car-brand';

describe('CarBrand', () => {
  let component: CarBrand;
  let fixture: ComponentFixture<CarBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
