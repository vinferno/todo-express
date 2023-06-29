import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from '../models/todo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private api: ApiService) { }
  public somethingChange = new BehaviorSubject(0);
  public selectedTodos$ = new BehaviorSubject<Todo| null>(null);
  public todos$!: Observable<Todo[]>;

  getTodos(fresh?: boolean) {

      this.todos$ = this.api.get<Todo[]>('todos');
      this.todos$.subscribe()

  }

  addTodo(task: string) {
    return this.api.post<Todo[], Todo>('todos', {task: task, id: 0}).pipe(tap(() => {
      this.somethingChange.next(1);
    })).subscribe();
  }

  selectTodo(todo: Todo){
    this.selectedTodos$.next(todo);
  }
}
