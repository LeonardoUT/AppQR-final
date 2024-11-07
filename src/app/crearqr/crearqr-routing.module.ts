import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearqrPage } from './crearqr.page';

const routes: Routes = [
  {
    path: '',
    component: CrearqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearqrPageRoutingModule {}
