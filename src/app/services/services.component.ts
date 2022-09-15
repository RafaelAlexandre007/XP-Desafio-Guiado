import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todoList.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  todoListService: TodoListService;
  addItem: string = "";

  constructor(todoListService: TodoListService) {
    this.todoListService = todoListService;
  }

  ngOnInit(): void {}
}
