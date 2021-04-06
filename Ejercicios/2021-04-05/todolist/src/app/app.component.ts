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

  counter = 0;

  removeTask(id: number){
    this.tasksList.splice(id,1);
  }

  addTask(value: string){
    this.tasksList.push({description: value, done:false});
    console.log(value);
  }

  isDone(id: number){
    console.log('isDone');
    return this.tasksList[id].done;
  }

  taskDone(id: number){
    this.tasksList[id].done = this.tasksList[id].done === true ? false : true;
    this.counter++;
    console.log(this.counter);
  }
}


