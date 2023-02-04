import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-sample';

  musicData = [
    {
      No: '0000-0001',
      Name: '私だけが好きだった。',
      Artist: 'すいそうぐらし',
      Youtube: 'https://www.youtube.com/watch?v=WnVDf7Wkg4Y'
    }
  ]
}
