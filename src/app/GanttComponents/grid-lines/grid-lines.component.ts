import { Component, OnInit } from '@angular/core';

export interface WeekNumbers {
  isActive: boolean;
  weekNumber: number;
}
declare global {
  interface Date {
    getWeekNumber(): number;
  }
}

Date.prototype.getWeekNumber = function () {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
    - 3 + (week1.getDay() + 6) % 7) / 7);
}
@Component({
  selector: 'app-grid-lines',
  templateUrl: './grid-lines.component.html',
  styleUrls: ['./grid-lines.component.scss']
})
export class GridLinesComponent implements OnInit {
  weekNumbers: Array<WeekNumbers> = []

  constructor() { }

  ngOnInit() {
    // This script is released to the public domain and may be used, modified and
    // distributed without restrictions. Attribution not necessary but appreciated.
    // Source: https://weeknumber.net/how-to/javascript

    // Returns the ISO week of the date.

    const d = new Date()
    for (let i = 0; i < 53; i++) {
      this.weekNumbers[i] = { isActive: false, weekNumber: i + 1 }
      if (i == d.getWeekNumber()) {
        this.weekNumbers[i] = { isActive: true, weekNumber: i + 1 }
      }
    }
  }

}
