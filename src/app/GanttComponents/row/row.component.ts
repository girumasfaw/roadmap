import { Component, OnInit, Input } from '@angular/core';
import {taskAnimation} from '../../shared/animations';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  animations:[
    taskAnimation
  ]
})
export class RowComponent implements OnInit {
  @Input() props: any;

  constructor() { }

  ngOnInit() {
  }

}
