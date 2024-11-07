import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuprofesorPageRoutingModule } from './menuprofesor-routing.module';
import { MenuprofesorPage } from './menuprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuprofesorPageRoutingModule
  ],
  declarations: [MenuprofesorPage]
})
export class MenuprofesorPageModule {}
