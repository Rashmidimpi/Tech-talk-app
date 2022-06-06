import { Component, OnInit, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-popup-addtask',
  templateUrl: './popup-addtask.component.html',
  styleUrls: ['./popup-addtask.component.css']
})
export class PopupAddtaskComponent implements OnInit {
  taskCreateForm: FormGroup;
  
  constructor(private storageService: StorageService, @Optional() public dialogRef: MatDialogRef<PopupAddtaskComponent>) { }
  
  ngOnInit(): void {
    this.taskCreateForm = new FormGroup({
      createTitle:  new FormControl('',  [Validators.required, Validators.minLength(4)]),
      createAuthor:  new FormControl('', [Validators.required]),
      createPriority:  new FormControl('Medium', [Validators.required])
    });
  }
  
  submitCreate()
  {
    if(!(this.getControl.createTitle.errors || this.getControl.createAuthor.errors || this.getControl.createPriority.errors))
    {
      const taskTitle = this.taskCreateForm.controls['createTitle'].value;
      const taskAuthor = this.taskCreateForm.controls['createAuthor'].value;
      const taskPriority = this.taskCreateForm.controls['createPriority'].value;
      this.storageService.createNewTask(taskTitle, taskAuthor, taskPriority)
      this.dialogRef.close();
    }
    
  }
  
  get getControl(){
    return this.taskCreateForm.controls;
  }
  
}
