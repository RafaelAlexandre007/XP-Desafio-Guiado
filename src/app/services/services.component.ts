import { Component, Inject, OnInit } from '@angular/core';
import { TEMA } from '../app.module';
import { TodoListService } from '../todoList.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  todoListService: TodoListService;
  addItem: string = "";

  constructor(todoListService: TodoListService, @Inject(TEMA) public tema: string) {
    this.todoListService = todoListService;
  }

  ngOnInit(): void {}
}
