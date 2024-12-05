import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-escanearqr',
  templateUrl: './escanearqr.page.html',
  styleUrls: ['./escanearqr.page.scss'],
})
export class EscanearqrPage implements OnInit {

  scannedData: any; 
  scanning: boolean = false; 
  router: any;

  constructor() { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.startScan(); 
  }

  async startScan() {
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (!status.granted) {
      console.log('Permiso de cámara denegado');
      alert('Permiso de cámara denegado. Por favor, habilítelo en la configuración.');
      return;
    }

    this.scanning = true; 
    BarcodeScanner.hideBackground(); 

    const result = await BarcodeScanner.startScan();
    BarcodeScanner.showBackground(); 
    this.scanning = false; 
    BarcodeScanner.stopScan(); 

    if (result.hasContent) {
      this.scannedData = JSON.parse(result.content);
      console.log('Datos escaneados:', this.scannedData);

      // Redirigir si contiene los datos esperados
      if (this.scannedData.curso && this.scannedData.fecha) {
        this.router.navigate(['/alumno'], {
          queryParams: { curso: this.scannedData.curso, fecha: this.scannedData.fecha }
        });
      }
    } else {
      console.log('No se escaneó ningún contenido');
      alert('No se detectó contenido en el código QR.');
    }
  } catch (error: any) {
    console.error('Error durante el escaneo:', error);
    alert('Hubo un problema al escanear el código. Inténtalo nuevamente.');
  }
}