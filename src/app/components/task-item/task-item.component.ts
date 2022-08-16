import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onTaskDelete: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.onTaskDelete.emit(this.task);
    console.log(`${this.task.id} should be deleted from db`);
  }

  onDoubleClick(): void {
    this.onToggleReminder.emit(this.task);
  }

}
