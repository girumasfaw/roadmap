import {Bar} from './Bars.model';

export interface GanttItem{
    id:string
    title: string;
    bars: Bar[]
  }