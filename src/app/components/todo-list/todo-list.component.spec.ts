import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';

//Configuring test module
describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should subscribe to update observable from service when component is initialized', () => {
    fixture = TestBed.createComponent(TodoListComponent);
    fixture.detectChanges();
    component=fixture.componentInstance;
    expect(component.updatePingSubscriber).toBe(true);
  });
});
