import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from '../services/asistencia.service';

@Component({
  selector: 'app-asistenciaalumno',
  templateUrl: './asistenciaalumno.page.html',
  styleUrls: ['./asistenciaalumno.page.scss'],
})
export class AsistenciaalumnoPage implements OnInit {

  asistenciaData: any[] = [];

  constructor(private asistenciaService: AsistenciaService) {}

  ngOnInit() {
    
    this.asistenciaData = this.asistenciaService.obtenerAsistencia();
  }
}
