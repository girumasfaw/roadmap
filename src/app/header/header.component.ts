import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  weeknumbers: Array<number> = []

  constructor() { }

  ngOnInit() {
    for(let i=0; i< 53; i++){
      this.weeknumbers[i]=i+1
    }
  }


}
