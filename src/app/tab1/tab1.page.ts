import { Component } from '@angular/core';

import {TodoTaskService} from '../todo-task.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  task:any;

  taskList = []


  constructor(private todoService:TodoTaskService) {}


  addTask(){

    this.taskList.push(this.task);

    this.task = "";

  }

  completed(value,i){
    
    this.todoService.Completed(value.detail.value);

    setTimeout(() => {

      this.taskList.splice(i,1);
      
    }, 2000);

  }
}
