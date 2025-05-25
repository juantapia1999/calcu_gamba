import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './components/balance/balance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculoHorasComponent } from './components/calculo-horas/calculo-horas.component';
import { CortesComponent } from './components/cortes/cortes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CorteTransferenciaComponent } from './components/corte-transferencia/corte-transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    CalculoHorasComponent,
    CortesComponent,
    InicioComponent,
    CorteTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
