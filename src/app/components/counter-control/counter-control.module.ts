import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterControlRoutingModule } from './counter-control-routing.module';
import { CounterControlComponent } from './counter-control.component';


@NgModule({
  declarations: [
    CounterControlComponent
  ],
  imports: [
    CommonModule,
    CounterControlRoutingModule
  ]
})
export class CounterControlModule { }
