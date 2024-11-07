import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenualumnoPageRoutingModule } from './menualumno-routing.module';
import { MenualumnoPage } from './menualumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenualumnoPageRoutingModule
  ],
  declarations: [MenualumnoPage]
})
export class MenualumnoPageModule {}
