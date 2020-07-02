import { Component, OnInit } from '@angular/core';
import { Range, NgxDrpOptions, PresetItem, RangeStoreService } from 'ngx-mat-daterange-picker';

@Component({
  selector: 'app-main-trip-info',
  templateUrl: './main-trip-info.component.html',
  styleUrls: ['./main-trip-info.component.scss']
})
export class MainTripInfoComponent implements OnInit {



  range: Range = { fromDate: new Date(), toDate: new Date() };
  period : Number;
  options: NgxDrpOptions;
  presets: Array<PresetItem> = [];
  
  

  constructor() { }

  ngOnInit(): void {

    let today = new Date();
    let fromMin = new Date(today.getFullYear(), today.getMonth() - 2, 1);
    let fromMax = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    let toMin = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    let toMax = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    this.setupPresets();
    this.options = {
      presets: this.presets,
      format: 'mediumDate',
      range: { fromDate: today, toDate: today },
      
    };

    this.period =0;
  }

  updateRange(range: Range) {
    this.range = range;
    this.period =  ((this.range.toDate.getTime() - this.range.fromDate.getTime()) /  (1000 * 3600 * 24) ) +1;
    console.log(
      "fromDate=" + this.range.fromDate.getDate() + " toDate=" + this.range.toDate.getDate() + " period=" + this.period
    );
  }

  setupPresets() {

    let backDate = (numOfDays) => {
      let today = new Date();
      return new Date(today.setDate(today.getDate() - numOfDays));
    }

    let today = new Date();
    let yesterday = backDate(1);
    let minus7 = backDate(7)
    let minus30 = backDate(30);


    

    this.presets = [
      { presetLabel: "Yesterday", range: { fromDate: yesterday, toDate: today } },
      { presetLabel: "Last 7 Days", range: { fromDate: minus7, toDate: today } },
      { presetLabel: "Last 30 Days", range: { fromDate: minus30, toDate: today } },

    ]
  }

 


}
