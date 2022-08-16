import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http"


const httpOptions = {
  "headers": new HttpHeaders({
    "Content-Type": "application/json"
  })
};


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private tasksApiUrl = "http://localhost:5000/tasks";

  constructor(private httpClient: HttpClient) { }


  //CRUD methods:
  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.tasksApiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.tasksApiUrl}/${task.id}`;
    return this.httpClient.delete<Task>(url);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.tasksApiUrl}/${task.id}`;
    return this.httpClient.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.tasksApiUrl, task, httpOptions);
  }
}
