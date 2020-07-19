import { Component, OnInit } from '@angular/core';
import { User } from '../common/data/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // user : User = new User('David', 'David', '123', "ddl.leo@gmail.com");

  constructor() { }

  ngOnInit(): void {
  }

}
