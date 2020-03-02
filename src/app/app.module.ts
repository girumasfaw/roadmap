import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GanttComponent } from './GanttComponents/gantt/gantt.component';
import { HeaderComponent } from './header/header.component';
import { GridLinesComponent } from './GanttComponents/grid-lines/grid-lines.component';
import { RowComponent } from './GanttComponents/row/row.component';
import { BarComponent } from './GanttComponents/bar/bar.component';
import { ControlComponent } from './SidebarComponents/control/control.component';
import { EpicComponent } from './SidebarComponents//epic/epic.component';
import { TaskComponent } from './SidebarComponents/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    GanttComponent,
    HeaderComponent,
    GridLinesComponent,
    RowComponent,
    BarComponent,
    ControlComponent,
    EpicComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
