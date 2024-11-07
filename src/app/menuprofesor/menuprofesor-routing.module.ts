import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuprofesorPage } from './menuprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: MenuprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuprofesorPageRoutingModule {}
