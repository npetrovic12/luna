import { Component } from '@angular/core';
import { routerAnimations } from './shared/animations/router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerAnimations,
  ]
})
export class AppComponent {
  title = 'luna';
}
