import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'

})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: 'Trunks',
    poder : 200000,
  };


  constructor ( ) {


  } }
