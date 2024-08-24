import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora-hijo',
  standalone: true,
  imports: [],
  templateUrl: './calculadora-hijo.component.html',
  styleUrl: './calculadora-hijo.component.css'
})
export class CalculadoraHijoComponent {
  @Input() operacion!: string;
  @Input() numero1!: number;
  @Input() numero2!: number;
  @Output() resultadoCalculado = new EventEmitter<number>();

  calcular():void {
    let resultado: number;
    switch(this.operacion) {
      case 'suma':
        resultado = this.numero1 + this.numero2;
        break;
      case 'resta':
        resultado = this.numero1 + this.numero2;
        break;
      case 'multiplicacion':
        resultado = this.numero1 * this.numero2;
        break;
      case 'division':
        resultado = this.numero1/this.numero2;
        break;
      default: 
        resultado = 0;
        break;
      }
      this.resultadoCalculado.emit(resultado);
  }

}
