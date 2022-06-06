import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  
  navigateToComponent(componentName)
  {
    if(componentName==="todo-list")
    {
      this.router.navigate(['/todo-list']);
      console.log("Navigating to todo list");
    }

    else if(componentName==="counter-control")
    {
      this.router.navigate(['/counter-control']);
      console.log("Navigating to counter control");
    }
  }
  
}
