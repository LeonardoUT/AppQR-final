import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { qrCode, book } from 'ionicons/icons';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menuprofesor',
  templateUrl: './menuprofesor.page.html',
  styleUrls: ['./menuprofesor.page.scss'],
})
export class MenuprofesorPage implements OnInit {


  constructor(private router:Router) {
    addIcons({qrCode,book});
  }

  ngOnInit() {
  }

salir(){
  this.router.navigate(['/home']);
}
}
