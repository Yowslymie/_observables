import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @ViewChild('input', {static: true}) todoInput: ElementRef;

  todoItems: string[] = [];
  txt: string;


  constructor() { }

  ngOnInit(): void {
    fromEvent(this.todoInput.nativeElement, 'keypress').pipe(
      filter((x: KeyboardEvent) => x.key === 'Enter')
    ).subscribe(x => {
      this.todoItems.push(this.txt);
      this.txt = '';
    });
  }

}
