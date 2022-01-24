import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';



@Injectable()


export class DbzService {


  private _personajes:Personaje [] = [
  {
    nombre:"Goku",
    poder :74000
  },
  {
    nombre:"Vegeta",
    poder :67000
  },
  {
    nombre: "Gottenks",
    poder : 8000
  },
  ];

  get personajes() {
    return [...this._personajes];
  }
constructor () {}

 agregarPersonaje( personaje:Personaje ){
   this._personajes.push( personaje );
 }

}
