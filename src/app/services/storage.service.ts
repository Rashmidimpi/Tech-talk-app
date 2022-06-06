import { Injectable  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { taskItemModel } from '../model/taskItemModel';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  updatePing: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public taskList: taskItemModel[] = [];
  
  constructor() { 
    this.setdefaultTasks();
    this.updatePing.next(true);
  }
  
  setdefaultTasks()
  {
    this.taskList =[
      new taskItemModel('2021-09-06T10:48:45.075Z', "Play Sackboy - A Big Adventure", "Rashmi", "Low"),
      new taskItemModel('2021-09-06T10:48:59.977Z', "Play Spiderman - Miles Morales", "Rashmi", "Medium")
    ]
    return this.taskList;
  }

  getTasks()
  {
    return this.taskList;
  }

  editTaskById(taskIDToEdit, taskTitle, taskAuthor, taskPriority)
  {
    console.log(this.taskList);
    console.log("Task ID", taskIDToEdit);
    let foundTask = this.taskList.filter(currentTask => {return currentTask.id==taskIDToEdit})[0];
    console.log('foundTask=', foundTask);
    let newTask = new taskItemModel(taskIDToEdit, taskTitle, taskAuthor, taskPriority);
    console.log(newTask.title)
    let indextoReplace = this.taskList.indexOf(foundTask);
    this.taskList[indextoReplace] = newTask;
  }

  deleteTaskById(taskIDToDelete)
  {
    console.log("Tasklist before delete", this.taskList);
    console.log("Task ID to delete", taskIDToDelete);
    let newTaskList = this.taskList.filter(currentTask => {return currentTask.id!==taskIDToDelete});
    console.log("Tasklist after delete", newTaskList)
    this.taskList=newTaskList;
    this.updatePing.next(true);
  }

  createNewTask(taskTitle, taskAuthor, taskPriority)
  {
    console.log("Tasklist before create", this.taskList);
    this.taskList.push(new taskItemModel(this.getnewTaskID(), taskTitle, taskAuthor, taskPriority));
    console.log("Tasklist after create", this.taskList);
  }

  getnewTaskID()
  {
    return new Date().toISOString();
  }
  }