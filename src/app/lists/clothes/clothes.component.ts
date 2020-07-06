import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  item: string;
  quantity: number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: 'Underwear', quantity: 4},
  {item: 'Socks', quantity: 4},
  {item: 'Sweat-shirt', quantity: 1},
  {item: 'Lighter-sweater', quantity: 1},
  {item: 'T-shirts', quantity: 4},
  {item: 'Pants', quantity: 2},
  {item: 'PJs', quantity: 1},
  {item: 'shoes', quantity: 2}
  

];
@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {


  displayedColumns: string[] = ['item', 'quantity'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
