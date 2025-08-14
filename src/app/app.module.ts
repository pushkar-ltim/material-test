import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTablePracticeComponent } from './material-table-practice/material-table-practice.component';

import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MaterialCdkDragDropPracticeComponent } from './material-cdk-drag-drop-practice/material-cdk-drag-drop-practice.component';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MaterialTablePracticeComponent,
    MaterialCdkDragDropPracticeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
