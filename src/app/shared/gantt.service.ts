import { Injectable } from '@angular/core';
import {Subject,BehaviorSubject} from 'rxjs';
import {GanttItem} from './models/GanttItem.model';
import {Bar} from './models/Bars.model';
import { v1 as uuidv1 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class GanttService {
  // ganttItems: GanttItem[] = []

  private readonly  _ganttItems =new BehaviorSubject<GanttItem[]>([])

  readonly ganttItems$ = this._ganttItems.asObservable();

  // GanttListChanged = new Subject<void>();

   get ganttItems(): GanttItem[] {
    return this._ganttItems.getValue();
  }

   set ganttItems(val: GanttItem[]) {
    this._ganttItems.next(val);
  }

  async addGanttItem(ganttItemObj) {
    this.ganttItems = [
      ...this.ganttItems, 
      {...ganttItemObj, id: uuidv1()}
    ];
  }

  async deleteEpic(id: string) {
    this.ganttItems = this.ganttItems.filter(item => item.id !== id);
  }

  createTask(epicId:string,taskObj:Bar){
    let task = this.ganttItems.find( e => e.id == epicId)
    task.bars=[...task.bars, {...taskObj, id: uuidv1()}]
  }

  deleteTask(epicId,taskId){
    let task = this.ganttItems.find( e => e.id == epicId)   
    task.bars.splice(task.bars.findIndex( t => t.id == taskId),1)
  }

  constructor() { }
}
