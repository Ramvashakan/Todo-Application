import { Component } from '@angular/core';
import { TodoTaskService } from '../todo-task.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  completedTask=[]

  constructor(private todolist:TodoTaskService) {

    this.completedTask = this.todolist.getData();

  }


}
