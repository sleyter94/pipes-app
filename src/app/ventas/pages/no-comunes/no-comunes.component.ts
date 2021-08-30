import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  name: string = 'Sleyter';
  gender: string = 'M';
  invitationMap = {
    'M' : 'invitarlo',
    'F' : 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Sleyter', 'Glenn','Luis','Oswar','Rossana','Oliver'];
  clientMap = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos 1 cliente esperando',
    'other':'tenemos # clientes esperando'
  }
  //keyvalue pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //JsonPipe
  heroes= [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robbin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async pipe
  miObs = interval(1000);
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa')
    }, 3500);
  });
  constructor(private primeNGConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }

  cambiarPersona(){
    console.log("cambia")
    if(this.gender == 'M'){
      this.name = 'Maria'
      this.gender = 'F'
    }else{
      this.name = 'Sleyter'
      this.gender = 'M'
    }
  }

  borrarCliente(){
    console.log("borra")
    this.clientes.pop();
  }

}
