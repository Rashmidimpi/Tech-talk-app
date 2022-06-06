import { Component, OnInit, Optional } from '@angular/core';
import { taskItemModel } from 'src/app/model/taskItemModel';
import { StorageService } from '../../services/storage.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { PopupAddtaskComponent } from './popup-addtask/popup-addtask.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public localtaskList: taskItemModel[] = [];
  public updatePingSubscriber=false;
  constructor(@Optional() private  dialogRef : MatDialog, private storageService: StorageService) { }

  ngOnInit() 
  {
    this.storageService.updatePing.subscribe( ping => {
      this.updatePingSubscriber=true;
      if (ping) {
        console.log("^^Array update ping received!^^");
        this.localtaskList = this.storageService.getTasks();
      }
  });
    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.localtaskList, event.previousIndex, event.currentIndex);
  }

  openAddPopup()
  {
    this.dialogRef.open(PopupAddtaskComponent);
  }
  

}
