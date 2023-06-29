import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-selected-todo',
  templateUrl: './selected-todo.component.html',
  styleUrls: ['./selected-todo.component.scss']
})
export class SelectedTodoComponent implements OnInit {
  todo$!: Observable<Todo| null>;
  todos$!: Observable<Todo[]>;
  public id!: number | undefined;
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todo$ = this.todosService.selectedTodos$.pipe(tap(todo => this.id = todo?.id ));
    this.todos$ = this.todosService.todos$
  }

}
