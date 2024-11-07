import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menuprofesor',
    loadChildren: () => import('./menuprofesor/menuprofesor.module').then( m => m.MenuprofesorPageModule)
  },
  {
    path: 'menualumno',
    loadChildren: () => import('./menualumno/menualumno.module').then( m => m.MenualumnoPageModule)
  },
  {
    path: 'crearqr',
    loadChildren: () => import('./crearqr/crearqr.module').then( m => m.CrearqrPageModule)
  },
  {
    path: 'escanearqr',
    loadChildren: () => import('./escanearqr/escanearqr.module').then( m => m.EscanearqrPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'asistenciaalumno',
    loadChildren: () => import('./asistenciaalumno/asistenciaalumno.module').then( m => m.AsistenciaalumnoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
