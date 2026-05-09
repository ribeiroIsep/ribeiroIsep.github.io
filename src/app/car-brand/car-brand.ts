import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarBrandInfo } from '../car-brand';


@Component({
  selector: 'app-car-brand',
  templateUrl: './car-brand.html',
  styleUrls: ['./car-brand.scss'],
})
export class CarBrand {
  carBrand = input.required<CarBrandInfo>();
}
