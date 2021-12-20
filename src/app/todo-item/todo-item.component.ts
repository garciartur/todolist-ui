import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  isEditable: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  editItem(event: Event): void {
    this.isEditable = true;
    const target = event.target as HTMLButtonElement;  
    this.update.emit({
      item: this.item,
      changes: {title: target.value }
    });
  }

  Item(): void {
    this.remove.emit(this.item);
  }

}
