import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  tasksList = [{
    description: 'task #1',
    done: false
  },{
    description: '2nd task',
    done: true
  }];

  removeTask(id: number){
    this.tasksList.splice(id,1);
  }

  addTask(value: string){
    this.tasksList.push({description: value, done:false});
    console.log(value);
  }

  isDone(id: number){
    return this.tasksList[id].done;
  }

  taskDone(id: number,event: any){
    this.tasksList[id].done = !this.tasksList[id].done;
    console.log(event);
  }
}


