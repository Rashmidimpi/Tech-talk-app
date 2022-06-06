import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterControlComponent } from './counter-control.component';

const routes: Routes = [
  {
    path: '', component: CounterControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterControlRoutingModule { }
