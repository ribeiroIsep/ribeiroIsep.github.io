import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header';
import {Car} from './car/car';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Car],
  template: `
    <main>
      <header class="brand-name">
        <img class="app-logo" src="assets/car-front-fill.svg" alt="Home"/>
        <h1>{{ title }}</h1>
      </header>
      <section class="content">
        <app-car></app-car>
      </section>
    </main>`,
  //templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'CarApp';
}
