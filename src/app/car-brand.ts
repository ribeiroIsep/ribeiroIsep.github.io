import {Component, input} from '@angular/core';

export interface CarBrandInfo {
  id: number;
  brand: string;
  model: string;
  horsePower: string;
  photo: string;
  availableUnits: number;
  carPlay: boolean;
  heatedSeats: boolean;
}
