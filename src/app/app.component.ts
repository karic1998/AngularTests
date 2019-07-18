import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bcch-angular-exercise';
  public num1: string;
  public num2: string;
  public operator: string;
  public opFunc: any;
  public result: any;

  setNumber(buttonID: string) {
    if (this.num1) {
      if (this.operator) {
        console.log(document.getElementById(buttonID).innerHTML);
        this.num2 = document.getElementById(buttonID).innerHTML;
      } else {
        window.alert('Please add operator');
      }
    } else {
      this.num1 = document.getElementById(buttonID).innerHTML;
    }
  }

  setOperator(buttonID: string) {
    if (this.num1) {
      console.log(document.getElementById(buttonID).innerHTML);
      this.operator = document.getElementById(buttonID).innerHTML;
      this.setOpFunc(buttonID);
    } else {
      window.alert('Add your number first!');
    }
  }

  setOpFunc(buttonId) {
    if (buttonId === 10) {
      this.opFunc = this.divide;
      console.log(this.opFunc);
    } else if (buttonId === 11) {
      this.opFunc = this.times;
      console.log(this.opFunc);
    } else if (buttonId === 12) {
      this.opFunc = this.minus;
      console.log(this.opFunc);
    } else {
      this.opFunc = this.plus;
      console.log(this.opFunc);
    }
  }

  clear() {
    this.num1 = undefined;
    this.num2 = undefined;
    this.operator = undefined;
    this.opFunc = undefined;
    this.result = undefined;
  }

  calculate() {
    if (
      this.num1 !== undefined &&
      this.num2 !== undefined &&
      this.operator &&
      this.opFunc
    ) {
      const caluclation = this.opFunc(this.num1, this.num2);
      const rounded = +caluclation.toFixed(6); //rounding to 6 decimal places (max)
      this.result = rounded;
      console.log(this.result);
    } else {
      window.alert('Please add valid calculation');
    }
  }

  //operator functions
  plus(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }

  minus(num1, num2) {
    return num1 - num2;
  }

  times(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}
