import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent3Component } from './test-component3/test-component3.component';



@NgModule({
  declarations: [TestComponent3Component],
  imports: [
    CommonModule
  ],
  exports:[
    TestComponent3Component
  ]
})
export class ParentModule2Module { }
