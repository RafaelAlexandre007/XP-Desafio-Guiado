import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  text = 'Uma mensagem Qualquer';
  n = 12050.4983;
  today = new Date();
  meuCep = '99356900';
  meuCPF = '09876543223'

  constructor() {}

  ngOnInit(): void {}
}
