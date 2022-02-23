import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  numbers =[];
  num=1;

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(){
    this.numbers.push(this.num);
    this.num++;
  }
}
