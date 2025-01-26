import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilesComponent } from "./profiles/profiles.component";
import { ToDoComponent } from "./to-do/to-do.component";

@Component({
  selector: 'app-root',
  imports: [ProfilesComponent, ToDoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondAngularProject';
}
