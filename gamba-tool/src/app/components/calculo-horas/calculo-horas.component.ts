import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calculo-horas',
  templateUrl: './calculo-horas.component.html',
  styleUrls: ['./calculo-horas.component.css']
})

export class CalculoHorasComponent implements OnInit {

  horas: any = [];
  totalHoras: any = "00:00";
  parcial: any = ['00:00', '00:00', '00:00', '00:00', '00:00', '00:00'];
  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 6; index++) {
      this.horas.push({ entrada: '00:00', colacion: '00:00', finColacion: '00:00', salida: '00:00' })
    }
  }

  onChange(event: any) {
    for (let i = 0; i < this.horas.length; i++) {
      this.parcial[i] = this.sumaHoras(this.diferenciaHoras(this.horas[i].colacion, this.horas[i].entrada), this.diferenciaHoras(this.horas[i].salida, this.horas[i].finColacion))
    }
    this.totalHoras = this.sumaHoras(this.sumaHoras(this.sumaHoras(this.parcial[0], this.parcial[1]), this.sumaHoras(this.parcial[2], this.parcial[3])), this.sumaHoras(this.parcial[4], this.parcial[5]));
  }

  diferenciaHoras(a: any, b: any): string {
    try {
      return this.minutosAHoras(this.horasAminutos(a) - this.horasAminutos(b));
    } catch (error) {
      throw console.log(`error dif ${error}`);
    }
  }

  sumaHoras(a: any, b: any): string {
    try {
      let aux = this.minutosAHoras(this.horasAminutos(a) + this.horasAminutos(b)).split(":");
      let auxA = aux[0].length < 2 ? ("0".concat(aux[0])) : aux[0];
      let auxB = aux[1].length < 2 ? ("0".concat(aux[1])) : aux[1];
      return auxA.concat(":", auxB);;
    } catch (error) {
      throw console.log(`error sum ${error}`);
    }
  }

  horasAminutos(hora: string): number {
    try {
      let aux = hora.split(":");
      return aux.length > 1 ? (Math.trunc(Number(aux[0]) * 60)) + Number(aux[1]) : 0;
    } catch (error) {
      throw console.log(`error hTm, ${hora} - ${error}`);
    }
  }

  minutosAHoras(minuto: number): string {
    try {
      return String(Math.trunc(minuto / 60)).concat(":", String(minuto % 60));
    } catch (error) {
      throw console.log(`error mTh, ${minuto} -  ${error}`);
    }
  }

}
