import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-priority-tag',
  templateUrl: './priority-tag.component.html',
  styleUrls: ['./priority-tag.component.css']
})
export class PriorityTagComponent implements OnInit {
  @Input() priorityLevel: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
