import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})

export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title = 'Insert a new item';
  placeholder = this.title;

  constructor() { }

  ngOnInit(): void {
  }

  submitValue(element: string): void {
    this.submit.emit(element);
  }

  cleanInput(): void {
    this.placeholder = " ";
  }
}
