import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  formMovimiento = new FormGroup({
    apertura: new FormControl(0),
    recargas: new FormControl(0),
    remesasEnviadas: new FormControl(0),
    ventaDivisas: new FormControl(0),
    compraDivisas: new FormControl(0),
    pagoRemesas: new FormControl(0),
    transferenciasBancarias: new FormControl(0),
    salidaABovedaYCajas: new FormControl(0),
    gastos: new FormControl(0)
  });

  formSaldoDivisa = new FormGroup({
    veinteMil: new FormControl(0),
    diezMil: new FormControl(0),
    cincoMil: new FormControl(0),
    dosMil: new FormControl(0),
    mil: new FormControl(0),
    quinientos: new FormControl(0),
    cien: new FormControl(0),
    cincuenta: new FormControl(0),
    diez: new FormControl(0)
  });

  saldoMovimiento: number = 0;
  saldoDivisa: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(): void {

    saldoMovimiento: number = 0;
    saldoDivisa: number = 0;
    
    let cortes: any = [20000, 10000, 5000, 2000, 1000, 500, 100, 50, 10];

    this.saldoMovimiento = this.formMovimiento.get('apertura')?.value + this.formMovimiento.get('recargas')?.value + this.formMovimiento.get('remesasEnviadas')?.value + this.formMovimiento.get('ventaDivisas')?.value - this.formMovimiento.get('compraDivisas')?.value - this.formMovimiento.get('pagoRemesas')?.value - this.formMovimiento.get('transferenciasBancarias')?.value - this.formMovimiento.get('salidaABovedaYCajas')?.value - this.formMovimiento.get('gastos')?.value;

    let i: number = 0;
    for (let x in this.formSaldoDivisa.value) {
      this.saldoDivisa = this.saldoDivisa + Number(this.formSaldoDivisa.get(x)?.value) * cortes[i];
      i++;
    }
    i=0;
    alert(`El Saldo Final es de $${this.saldoDivisa-this.saldoMovimiento}`);
  }

}
