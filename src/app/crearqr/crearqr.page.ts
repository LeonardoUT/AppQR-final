import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from '../services/asistencia.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-crearqr',
  templateUrl: './crearqr.page.html',
  styleUrls: ['./crearqr.page.scss'],
})
export class CrearqrPage implements OnInit {

  valorQr = {
    codigocurso: '004V',
    codigoprofesor: '001',
    fecha: ''
  };

  valorQrTexto: string = ''; 

  constructor(private asistenciaService: AsistenciaService, private router: Router) {} 

  ngOnInit() {
      this.generarYGuardarQR();
  }

  generarQR() {
    
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const anio = fechaActual.getFullYear();
    const hora = fechaActual.getHours().toString().padStart(2, '0');
    const minutos = fechaActual.getMinutes().toString().padStart(2, '0');

    this.valorQr.fecha = `${dia}-${mes}-${anio} ${hora}:${minutos}`;
    this.valorQrTexto = JSON.stringify(this.valorQr); 
  }

  generarYGuardarQR() {
    this.generarQR();
    this.asistenciaService.agregarAsistencia(this.valorQr); 
    
  }
}

