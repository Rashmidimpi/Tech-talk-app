import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeletetaskComponent } from './popup-deletetask.component';

describe('PopupDeletetaskComponent', () => {
  let component: PopupDeletetaskComponent;
  let fixture: ComponentFixture<PopupDeletetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDeletetaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDeletetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
