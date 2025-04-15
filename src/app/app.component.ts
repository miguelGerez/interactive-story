import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurationComponent } from './pages/configuration/configuration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConfigurationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interactive-story';


}
