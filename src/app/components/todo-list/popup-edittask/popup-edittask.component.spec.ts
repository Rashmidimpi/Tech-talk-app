import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEdittaskComponent } from './popup-edittask.component';

describe('PopupEdittaskComponent', () => {
  let component: PopupEdittaskComponent;
  let fixture: ComponentFixture<PopupEdittaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEdittaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEdittaskComponent);
    component = fixture.componentInstance;
    component.taskData={taskId: '2022-09-06T10:48:45.075Z', taskTitle: "Play Sackboy - A Big Adventure", taskAuthor: "Pratyush", taskPriority: "Low"};
    fixture.detectChanges();
  });

  it('should contain validation concerns for invalid form control values', () => {
    component.taskEditForm.setValue({editID: component.taskData.taskId, editTitle: "Inv", editAuthor: "Inv", editPriority: "High"});
    expect(Object.keys(component.getControl.editTitle.errors).length>0).toBe(true);
  });
});
