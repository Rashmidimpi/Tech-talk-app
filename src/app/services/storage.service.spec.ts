import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let serviceFixture: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    serviceFixture = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(serviceFixture).toBeTruthy();
  });

  it('should seed 2 tasks when initialized', () => {
    expect(serviceFixture.setdefaultTasks().length==2).toBe(true);
  })

  it('should return current ISODateString for task ID', () => {
    expect(serviceFixture.getnewTaskID()==new Date().toISOString()).toBe(true);
  })

  it('should remove a task successfully from tasklist', () => {
    serviceFixture.setdefaultTasks();
    let initialTaskCount = serviceFixture.taskList.length;
    serviceFixture.deleteTaskById('2021-09-06T10:48:59.977Z');
    let finalTaskCount = serviceFixture.taskList.length;
    expect(finalTaskCount).toBe(initialTaskCount-1);
  })

  it('should add a task successfully to tasklist', () => {
    serviceFixture.setdefaultTasks();
    let initialTaskCount = serviceFixture.taskList.length;
    serviceFixture.createNewTask("testTask", "testBed", "High");
    let finalTaskCount = serviceFixture.taskList.length;
    expect(finalTaskCount).toBe(initialTaskCount+1);
  })
});
