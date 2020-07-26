import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ParentModuleModule } from './parent-module/parent-module.module';
import {DataService} from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModuleModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
