import { Component, OnInit, Input } from '@angular/core';
import {GanttService} from '../../shared/gantt.service';
import {Bar} from '../../shared/models/Bars.model';
import {taskAnimation} from '../../shared/animations';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  animations:[
    taskAnimation
  ]
})
export class TaskComponent implements OnInit {
  @Input() task:Bar
  @Input() epicId: number

  
  description: string = "Task description"
  beginWeek: string = "1";
  endWeek: string = "53"

  constructor(public ganttService: GanttService) { 

  }

  ngOnInit() {
  }

  removeTask(){
    this.ganttService.deleteTask(this.epicId, this.task.id)
  }

}
