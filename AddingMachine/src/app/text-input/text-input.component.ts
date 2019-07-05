import { Component, OnInit } from '@angular/core';
import { Evaluator } from "../../../evaluator";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  result: number; 
  evaluator : Evaluator= new Evaluator()

  constructor() { }

  ngOnInit() {
  }

  doCalculations(val: string) {
    this.result =this.evaluator.calcs(val)
  }
}


