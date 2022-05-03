import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatTableModule
  ]
})
export class StudentsModule { }
