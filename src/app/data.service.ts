import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()

export class DataService {

  private todos = new BehaviorSubject<any>(['The initial todo', 'Another todo']);
  todo = this.todos.asObservable();

  constructor() { }

  changeTodo(todo) {
    this.todos.next(todo)
  }

}
