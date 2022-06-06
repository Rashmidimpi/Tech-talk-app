import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-popup-edittask',
  templateUrl: './popup-edittask.component.html',
  styleUrls: ['./popup-edittask.component.css']
})
export class PopupEdittaskComponent implements OnInit {
  taskEditForm: FormGroup;
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public taskData, private storageService: StorageService, @Optional() public dialogRef: MatDialogRef<PopupEdittaskComponent>) { }
  
  ngOnInit(): void {
    this.taskEditForm = new FormGroup({
      editID:  new FormControl(this.taskData.taskId),
      editTitle:  new FormControl(this.taskData.taskTitle, [Validators.required, Validators.minLength(4)]),
      editAuthor:  new FormControl(this.taskData.taskAuthor, [Validators.required]),
      editPriority:  new FormControl(this.taskData.taskPriority, [Validators.required])
    });
  }
  
  get getControl(){
    return this.taskEditForm.controls;
  }
  
  submitEdit()
  {
    if(!(this.getControl.editTitle.errors || this.getControl.editAuthor.errors || this.getControl.editPriority.errors))
    {
      console.log(this.taskEditForm.controls['editID'].value);
      const taskIDToEdit = this.taskEditForm.controls['editID'].value;
      const taskTitle = this.taskEditForm.controls['editTitle'].value;
      const taskAuthor = this.taskEditForm.controls['editAuthor'].value;
      const taskPriority = this.taskEditForm.controls['editPriority'].value;
      this.storageService.editTaskById(taskIDToEdit, taskTitle, taskAuthor, taskPriority);
      this.dialogRef.close();
    }
  }
  
}
