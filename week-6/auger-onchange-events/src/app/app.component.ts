import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auger-onchange-events';
  myGreeting = 'Hello';
  myUser: { name: string } = { name: 'John' }
}
