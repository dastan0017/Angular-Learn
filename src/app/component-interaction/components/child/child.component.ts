import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() messages!: string[];
  @Output() onDeleteTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteElement(task: string) {
    this.onDeleteTask.emit(task);
  }
}
