import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProcuradoComponent } from './procurado/procurado.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'procurado/:id', component: ProcuradoComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
