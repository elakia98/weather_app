import { Component } from '@angular/core';
import {DataService} from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="elakia";
  test={name1:"Chan"}
  constructor(public dataService:DataService){

  }
  increase(){
    this.dataService.count++;
  } 
  choose(){
    return this.test.name1;
  }
}
 