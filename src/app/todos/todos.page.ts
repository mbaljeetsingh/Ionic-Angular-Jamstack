import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  todos;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.todos = this.dataService.getTodos();
  }
}
