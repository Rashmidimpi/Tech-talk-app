import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { SingleTaskComponent } from './singletask/singletask.component';
import { StorageService } from '../../services/storage.service';
import { PriorityTagComponent } from './priority-tag/priority-tag.component';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupEdittaskComponent } from './popup-edittask/popup-edittask.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupDeletetaskComponent } from './popup-deletetask/popup-deletetask.component';
import { TaskOverviewComponent } from './popup-deletetask/task-overview/task-overview.component';
import { PopupAddtaskComponent } from './popup-addtask/popup-addtask.component';

@NgModule({
  imports: [CommonModule, TodoListRoutingModule, MatListModule, DragDropModule, MatIconModule, MatButtonModule, MatDialogModule, FormsModule, ReactiveFormsModule],
  declarations: [TodoListComponent, SingleTaskComponent, PriorityTagComponent, PopupEdittaskComponent, PopupDeletetaskComponent, TaskOverviewComponent, PopupAddtaskComponent],
  providers: [StorageService]
})
export class TodoListModule {}