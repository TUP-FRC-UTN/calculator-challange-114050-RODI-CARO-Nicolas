import { Component } from '@angular/core';
import { CalculadoraHijoComponent } from '../calculadora-hijo/calculadora-hijo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-padre',
  standalone: true,
  imports: [FormsModule, CalculadoraHijoComponent],
  templateUrl: './calculadora-padre.component.html',
  styleUrl: './calculadora-padre.component.css'
})
export class CalculadoraPadreComponent {
  numero1: number = 0;
  numero2: number = 0;
  operacion: string = '';
  resultado!: number

  setOperacion(operacion:string):void {
    this.operacion = operacion
  }

  recibirResultado(resultado: number):void {
    this.resultado = resultado
  }
}
