import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  
  constructor(private taskService: TaskService) { 

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
  
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => {
      console.log(`${task.id} is deleted from database`);
      this.tasks = this.tasks.filter((t)=> t.id !== task.id);
    });
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe(() => console.log(`task ${task.id}'s reminder has been set to ${task.reminder}`));
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe( task => this.tasks.push(task) );
  }
}
