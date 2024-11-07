import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private asistenciaData: any[] = []; 

  constructor() {}

  
  agregarAsistencia(dato: any) {
    this.asistenciaData.push(dato);
  }

  
  obtenerAsistencia() {
    return this.asistenciaData;
  }
}