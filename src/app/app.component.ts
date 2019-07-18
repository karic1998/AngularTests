import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bcch-angular-exercise';
  public num1;

  clickButton(buttonID) {
    console.log(document.getElementById(buttonID).innerHTML);
    this.num1 = document.getElementById(buttonID).innerHTML;
    console.log(this.num1);
  }
}
