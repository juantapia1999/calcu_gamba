import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poder-simple',
  templateUrl: './poder-simple.component.html',
  styleUrls: ['./poder-simple.component.css'],
})
export class PoderSimpleComponent implements OnInit {

  titularPoder: any = {
    nombre: "",
    nacimiento: false,
    antecedente: false,
    documento: 0,
    tipoDoc: '',
    hijos: false,
    nombreHijo: '',
    documentoHijo: 0
  };

  fechaActual: any = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onPrint() {
    window.print();
  }

  limpiar() {
    this.titularPoder.nombre = '';
    this.titularPoder.nacimiento = false;
    this.titularPoder.antecedente = false;
    this.titularPoder.documento = 0;
    this.titularPoder.tipoDoc = '';
    this.titularPoder.hijos = false;
    this.titularPoder.nombreHijo = '';
    this.titularPoder.documentoHijo = 0;
  }

}
