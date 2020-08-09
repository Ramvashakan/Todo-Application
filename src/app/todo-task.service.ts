import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoTaskService {

  completedTask = []

  constructor() { }

  Completed(data){

    this.completedTask.push(data)
   
    console.log(this.completedTask)
    
  }


}
