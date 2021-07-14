import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'sleyter';
  nombreUpper: string = 'SLEYTER';
  nombreTitle: string = 'sLeYTEr SandOVAL'
  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
