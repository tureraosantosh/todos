import { Component, OnInit } from "@angular/core";
import { TodosDataService } from "../data/todos-data.service";

export class ToDo {
  constructor(
    public id: number,
    public description: string,
    public status: boolean,
    public targetDate: Date
  ) {}
}
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: ToDo[];
  
  constructor(private todoSrevice: TodosDataService) {}

  ngOnInit() {
    this.todoSrevice.getAllTodos().subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }
}
