import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    const sub = this.todosService.selectedTodos$
    sub.pipe(take(5)).subscribe( (todo) => {
      const input = document.querySelector('input') as HTMLInputElement;
      if (todo) {
        input.value = todo.task;
      }
    })
  }

  addTodo(input: HTMLInputElement) {
    console.log(input.value);
    this.todosService.addTodo(input.value);
  }

}
