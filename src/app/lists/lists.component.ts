import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  tabs = ['Clothes', 'toiletries', 'Entretainment'];
  selected = new FormControl(0);
  tabName: string;

  addTab(tabName: string) {
    this.tabs.push(tabName.valueOf());
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
