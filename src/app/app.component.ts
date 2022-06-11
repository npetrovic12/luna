import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
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

  routeAnimationState$: Observable<string>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.routeAnimationState$ = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      map(() => {
        let rd = this.route;

        while (rd.firstChild) {
          rd = rd.firstChild;
        }

        return rd.snapshot.data['animationState'];
      }),
    );
  }

}
