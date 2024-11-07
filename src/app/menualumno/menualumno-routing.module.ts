import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenualumnoPage } from './menualumno.page';

const routes: Routes = [
  {
    path: '',
    component: MenualumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenualumnoPageRoutingModule {}
