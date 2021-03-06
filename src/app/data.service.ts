import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  getTodo(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
