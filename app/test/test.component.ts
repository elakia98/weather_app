import { Component, OnInit } from '@angular/core';
import{Test} from '../test';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  Test:Test={
    id:1,
    sirname:"Pikachu"
  }
  constructor() { }
  ngOnInit(): void {
  }
  queen="chan"
}
