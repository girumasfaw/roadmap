import { Component, OnInit, OnDestroy } from '@angular/core';
import {GanttService} from '../../shared/gantt.service';
import {GanttItem} from '../../shared/models/GanttItem.model';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit , OnDestroy {

  isOpen: boolean = true;
  ganttItems: GanttItem[]
  itemsLength: number;

  defaultGanttItem:GanttItem = {
     id:"",
     title: "Epic placeholder",
     bars:[]
  }

  constructor(public ganttService:GanttService) { 
     this.itemsLength = this.ganttService.ganttItems.length
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  createEpic(){
    this.ganttService.addGanttItem(this.defaultGanttItem)
  }

  toggle(){
    this.isOpen = !this.isOpen
  }

}
