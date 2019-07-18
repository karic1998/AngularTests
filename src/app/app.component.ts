import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bcch-angular-exercise';

  clickButton(buttonID) {
    window.alert('button is pressed!');
    console.log(document.getElementById(buttonID).innerHTML);
  }
}
