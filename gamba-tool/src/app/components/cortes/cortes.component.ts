import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cortes',
  templateUrl: './cortes.component.html',
  styleUrls: ['./cortes.component.css']
})
export class CortesComponent implements OnInit {

  seleccion: string = "USD";
  total: number = 0;
  cortes: any = [200, 100, 50, 20, 10, 5, 2, 1];
  formCortes = new FormGroup({
    doscientos: new FormControl(),
    cien: new FormControl(),
    cincuenta: new FormControl(),
    veinte: new FormControl(),
    diez: new FormControl(),
    cinco: new FormControl(),
    dos: new FormControl(),
    uno: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(event: any) {
    this.total = 0;
    for (let x in this.formCortes.value) {
      this.formCortes.get(x)?.setValue(0);
    }
  }

  onSubmit() {
    this.total = 0;
    let i = 0;
    for (let x in this.formCortes.value) {
      this.total = this.total + Number(this.formCortes.get(x)?.value) * this.cortes[i]
      i++;
    }
    i = 0;
  }

}
