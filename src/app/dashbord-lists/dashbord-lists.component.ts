import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashbord-lists',
  templateUrl: './dashbord-lists.component.html',
  styleUrls: ['./dashbord-lists.component.scss']
})
export class DashbordListsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Lists', cols: 1, rows: 1 },
          { title: 'Trip', cols: 1, rows: 1 },
          { title: 'Weather', cols: 1, rows: 1 },
          { title: 'User', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Lists', cols: 2, rows: 1 },
        { title: 'Trip', cols: 1, rows: 1 },
        { title: 'Weather', cols: 1, rows: 2 },
        { title: 'User', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
