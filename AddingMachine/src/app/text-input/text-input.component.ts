import { Component, OnInit } from '@angular/core';
import { Evaluator } from "../../../evaluator";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  result: string = ""; 
  
  evaluator : Evaluator= new Evaluator()

  constructor() { }

  ngOnInit() {
  }

  doCalculations(val: string) {
    this.result += ">" + val + "\n";
    this.result += ">>" + this.evaluator.calcs(val) + "\n"
  }
}


