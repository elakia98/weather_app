import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent1Component } from './test-component1/test-component1.component';
import { TestComponent2Component } from './test-component2/test-component2.component';
import { ParentModule2Module } from '../parent-module2/parent-module2.module';



@NgModule({
  declarations: [TestComponent1Component, TestComponent2Component],
  imports: [
    CommonModule,
    ParentModule2Module,

    ],
  exports:[TestComponent1Component,ParentModule2Module]
})
export class ParentModuleModule { }
