import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-cicle-life',
  templateUrl: './cicle-life.component.html',
  styleUrls: ['./cicle-life.component.css'],
})
export class CicleLifeComponent {
  title = 'PRATICA-AULA10-DESAFIO2';
  config: boolean = false;
  exercises: Exercise[] = [];
}
