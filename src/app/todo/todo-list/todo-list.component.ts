import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos;
  
  constructor(toDoService: ToDoService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
    this.todos = toDoService.tasks;
  }


  ngOnInit() {
  }

  onNewButtonClick() {
    // this.addNewToDoButtonClicked.emit();
    this.router.navigate(['new'], { relativeTo: this.route })
  }

   deleteFieldValue(todo) {
     this.todos = this.todos.filter(t => t.name !== todo.name);
   }

    onEditButtonClicked(index) {
      this.router.navigate(['/todo', 'edit', index]);
}
}
