import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddtaskComponent } from './popup-addtask.component';

describe('PopupAddtaskComponent', () => {
  let component: PopupAddtaskComponent;
  let fixture: ComponentFixture<PopupAddtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain validation concerns for invalid form control values', () => {
    component.taskCreateForm.setValue({createTitle: "Inv", createAuthor: "Inv", createPriority: "High"});
    expect(Object.keys(component.getControl.createTitle.errors).length>0).toBe(true);
  });
});
