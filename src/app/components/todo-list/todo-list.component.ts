import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  public todos$!: Observable<Todo[]>;
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.getTodos();
    this.todosService.somethingChange.subscribe(item => {
      console.log(item);
      this.getTodos()
    })
  }
  getTodos() {
    this.todosService.getTodos();
    this.todos$ = this.todosService.todos$;
  }

  selectTodo(todo: Todo) {
    this.todosService.selectTodo(todo);
  }
}
