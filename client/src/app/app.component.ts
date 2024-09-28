import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Gabriel';
  myBtn = 'My Button';

  // attribute binding
  isDisabled = true;
  angularImage =
    'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg';

  // style binding
  bgColor = 'green';
  titleColor = 'white';
  description = 'font-size: 9px; color:red'; // this is actually a cleaner way

  // Class binding
  textColor = 'yes!';
}
