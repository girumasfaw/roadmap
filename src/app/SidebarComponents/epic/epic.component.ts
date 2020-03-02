import { Component, OnInit ,Input } from '@angular/core';
import {GanttService} from '../../shared/gantt.service';
import {Bar} from '../../shared/models/Bars.model';
import {GanttItem} from '../../shared/models/GanttItem.model';
import {cardAnimation} from '../../shared/animations'

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss'],
  animations:[
    cardAnimation
  ]
})
export class EpicComponent implements OnInit {

  defaultTask:Bar={
    id:"",
    beginWeek: 1,
    endWeek: 53,
    status: "On track",
    description: "Task placeholder"

  }

  @Input() epic:GanttItem;

  constructor(public ganttService:GanttService) { }

  ngOnInit() {
  }

  createTask(){
      this.ganttService.createTask(this.epic.id,this.defaultTask)
  }

  deleteEpic(){
    this.ganttService.deleteEpic(this.epic.id)    
  }
}
