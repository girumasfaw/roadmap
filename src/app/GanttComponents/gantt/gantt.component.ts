import { Component, OnInit , OnDestroy} from '@angular/core';
import {GanttService} from '../../shared/gantt.service';
import {fade} from '../../shared/animations';


@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
  animations:[
    fade
  ]
})
export class GanttComponent implements OnInit ,OnDestroy {

  constructor(public ganttService:GanttService) { }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

}
