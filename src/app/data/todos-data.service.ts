import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToDo } from "../todos/todos.component";

@Injectable({
  providedIn: "root"
})
export class TodosDataService {
  constructor(private http: HttpClient) {}

  getAllTodos() {
    return this.http.get<ToDo[]>("http://localhost:8080/todos");
  }
}
