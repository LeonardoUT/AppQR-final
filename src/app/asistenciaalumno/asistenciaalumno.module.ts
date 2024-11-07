import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaalumnoPageRoutingModule } from './asistenciaalumno-routing.module';

import { AsistenciaalumnoPage } from './asistenciaalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaalumnoPageRoutingModule
  ],
  declarations: [AsistenciaalumnoPage]
})
export class AsistenciaalumnoPageModule {}
