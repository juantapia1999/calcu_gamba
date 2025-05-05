import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './components/balance/balance.component';
import { CalculoHorasComponent } from './components/calculo-horas/calculo-horas.component';
import { CortesComponent } from './components/cortes/cortes.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'calculo-horas', component: CalculoHorasComponent },
  { path: 'cortes', component: CortesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
