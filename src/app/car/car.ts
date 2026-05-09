import { Component } from '@angular/core';
import { CarBrand } from '../car-brand/car-brand';
import { CarBrandInfo } from '../car-brand';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CarBrand],
  template: `
    <section>
      <form>
        <div class="input-container">
          <input type="text" placeholder="Filter by brand" />
          <button class="primary" type="button">Search</button>
        </div>
      </form>
    </section>
    <section class="results">
      <app-car-brand [carBrand]="carBrand"></app-car-brand>
    </section>
  `,
  styleUrl: './car.scss'
})
export class Car {

  readonly baseUrl = 'https://images.pexels.com/photos/27810437/pexels-photo-27810437.jpeg';

  carBrand: CarBrandInfo = {
    id: 9999,
    brand: 'Audi',
    model: 'A3',
    horsePower: '1.5 TFSI 150 hp',
    photo: this.baseUrl,
    availableUnits: 1,
    carPlay: true,
    heatedSeats: false,
  };
}
