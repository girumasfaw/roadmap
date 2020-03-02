import { Component, OnInit, Input } from '@angular/core';
import {Bar} from '../../shared/models/Bars.model'

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @Input() props:Bar;
  constructor() { }

  ngOnInit() {
  }

}
