import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PRATICA-AULA10-DESAFIO2';
  config: boolean = false;
  exercises: Exercise[] = [];
}

