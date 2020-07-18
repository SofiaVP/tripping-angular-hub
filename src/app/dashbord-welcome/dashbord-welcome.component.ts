import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashbord-welcome',
  templateUrl: './dashbord-welcome.component.html',
  styleUrls: ['./dashbord-welcome.component.scss']
})
export class DashbordWelcomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Trip', url:'/tripping-trip', picture:'../assets/images/roadtrip.png', cols: 1, rows: 1 },
          { title: 'Lists', url:'/tripping-list', picture:'../assets/images/perfectpacking.jpg', cols: 1, rows: 2 },
          { title: 'Traveling Jokes',url:'', picture:'../assets/images/lastminutepackingchallengeaccepted.jpg', cols: 2, rows: 1 },
          { title: 'User', url:'', picture:'../assets/images/users.jpg', cols: 2, rows: 2 }
        ];
      }

      return [
        { title: 'Trip', url:'/tripping-trip', picture:'../assets/images/roadtrip.png', cols: 1, rows: 1 },
        { title: 'Lists', url:'/tripping-list', picture:'../assets/images/perfectpacking.jpg', cols: 1, rows: 2 },
        { title: 'Traveling Jokes',url:'', picture:'../assets/images/lastminutepackingchallengeaccepted.jpg', cols: 2, rows: 1 },
        { title: 'User', url:'', picture:'../assets/images/users.jpg', cols: 2, rows: 2 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
