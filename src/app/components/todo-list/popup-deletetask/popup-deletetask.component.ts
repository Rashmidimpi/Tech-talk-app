import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-popup-deletetask',
  templateUrl: './popup-deletetask.component.html',
  styleUrls: ['./popup-deletetask.component.css']
})
export class PopupDeletetaskComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public taskData, private storageService: StorageService, public dialogRef: MatDialogRef<PopupDeletetaskComponent>) { }

  ngOnInit(): void {
  }

  closeDeleteDialogue()
  {
    this.dialogRef.close();
  }

  deleteTask()
  {
    console.log("Delete from popup delete task", this.taskData.taskId);
    this.storageService.deleteTaskById(this.taskData.taskId);
    this.dialogRef.close();
  }

}
