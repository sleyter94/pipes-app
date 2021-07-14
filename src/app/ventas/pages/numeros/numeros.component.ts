import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 3234567.8254;
  porcentaje: number = 0.4892849;

  constructor() { }

  ngOnInit(): void {
  }

}
