import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { qrCode, book } from 'ionicons/icons';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menualumno',
  templateUrl: './menualumno.page.html',
  styleUrls: ['./menualumno.page.scss'],
})
export class MenualumnoPage implements OnInit {


  constructor(private router:Router) {
    addIcons({qrCode,book});
  }

  ngOnInit() {
  }

salir(){
  this.router.navigate(['/home']);
}
}
