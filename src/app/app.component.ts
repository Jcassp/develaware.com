import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PlansComponent } from './pages/plans/plans.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IndexComponent,
    AboutusComponent,
    PlansComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'develaware.com';
}
