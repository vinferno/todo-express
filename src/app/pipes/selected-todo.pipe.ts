import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';

@Pipe({
  name: 'selectedTodo'
})
export class SelectedTodoPipe implements PipeTransform {

  transform(value: Todo[] | null, ...args: unknown[]): Todo[] {
    console.log(args)
    return value ? value.filter(todo => todo.id === args[0]) : [];
  }

}
