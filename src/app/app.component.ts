import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestV3';

  public username = 'Test';

  public currentUser: User = {username: 'TestName', email: 'Test@1234'};

  public getUserName(): string {

    return this.currentUser.username;
  }
}
interface User {
username: string;
email: string;
}
