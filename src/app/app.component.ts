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

  setNumber(buttonID: string) {
    if (this.num1) {
      console.log(document.getElementById(buttonID).innerHTML);
      this.num2 = document.getElementById(buttonID).innerHTML;
      console.log(this.num1);
    } else {
      this.num1 = document.getElementById(buttonID).innerHTML;
    }
  }

  setOperator(buttonID: string) {
    console.log(document.getElementById(buttonID).innerHTML);
    this.operator = document.getElementById(buttonID).innerHTML;
    console.log(this.operator);
  }
}
