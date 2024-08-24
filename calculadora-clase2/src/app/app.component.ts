import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraPadreComponent } from './calculadora-padre/calculadora-padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadoraPadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora-clase2';
}
