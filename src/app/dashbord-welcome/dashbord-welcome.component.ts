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
          { title: 'Weather forecast', url:'/tripping-weather"', picture:'../assets/gifs/weather1.gif', cols: 1, rows: 1 },
          { title: 'Luggage', url:'/tripping-list', picture:'../assets/gifs/luggage 1.gif', cols: 1, rows: 1 },
          { title: 'To Do', url:'/tripping-to-do', picture:'../assets/gifs/todo.gif', cols: 1, rows: 1 },
          { title: 'User Information',url:'/tripping-user', picture:'../assets/gifs/user1.gif', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Weather forecast', url:'/tripping-weather', picture:'../assets/gifs/weather1.gif', cols: 1, rows: 1 },
        { title: 'Luggage', url:'/tripping-list', picture:'../assets/gifs/luggage 1.gif', cols: 1, rows: 1 },
        { title: 'To Do', url:'/tripping-to-do', picture:'../assets/gifs/todo.gif', cols: 1, rows: 1 },
        { title: 'User Information',url:'/tripping-user', picture:'../assets/gifs/user1.gif', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
