import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {displayedColumns: string[] = [ 'title', 'description', 'priority', 'completed','created_at', 'due_date'];
todoArray: any[];

  constructor  (private _fb: FormBuilder, private todoservice: TodoListService,  private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {this.todoservice.getToDoList().subscribe(res => {
    console.log(res);
    this.todoArray = res.data;
  });
  
  }}
