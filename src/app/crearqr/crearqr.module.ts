import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CrearqrPageRoutingModule } from './crearqr-routing.module';
import { CrearqrPage } from './crearqr.page';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearqrPageRoutingModule,
    QrCodeModule
  ],
  declarations: [CrearqrPage]
})
export class CrearqrPageModule {}
