import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-corte-transferencia',
  templateUrl: './corte-transferencia.component.html',
  styleUrls: ['./corte-transferencia.component.css'],
})
export class CorteTransferenciaComponent implements OnInit {

  textoParaCopiar: string = "";
  totalTransfer: number = 0;

  readonly cortes: any = [20000, 10000, 5000, 2000, 1000, 500, 100, 50, 10];
  cortesRev: any = [10, 50, 100, 500, 1000, 20000, 5000, 10000, 20000];

  totalCortes = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  formCorteTransf = new FormGroup({
    seleccion: new FormControl("CODIGO", [Validators.required]),
    numOp: new FormControl(0, [Validators.required]),
    monto: new FormControl(0, [Validators.required]),
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.formCorteTransf.valid) {
      let aux = this.formCorteTransf.get('monto')?.value;
      if (aux >= 10 && aux % 10 != aux && aux % 10 == 0) {
        this.generador(this.cortes, aux);
        this.totalTransfer = this.totalTransfer + aux;
        this.textoParaCopiar = this.textoParaCopiar.concat(`${this.formCorteTransf.get('seleccion')?.value}: ${this.formCorteTransf.get('numOp')?.value} - MONTO: $${aux},   `);
        this.formCorteTransf.reset();
      }
    } else {
      alert("ingrese datos validos")
    }
  }

  generador(lista: any, monto: any) {
    for (let x of lista) {
      let resto = monto % Number(x);
      if (monto >= Number(x) && monto > 0) {
        this.totalCortes[lista.length - 1] += Math.trunc(monto / Number(x));
        this.generador(lista.slice(1), resto);
      } else {
        if (monto > 0) {
          this.generador(lista.slice(1), resto);
        }
      }
      break;
    }
  }

  toCopy() {
    navigator.clipboard.writeText(this.textoParaCopiar);
  }
}
