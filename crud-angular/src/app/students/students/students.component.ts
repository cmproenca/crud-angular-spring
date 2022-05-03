import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [
    {_id: '1', name: 'Anya', class:'1A'}
  ];
  displayedColumns = ['name', 'class'];

  constructor() { }

  ngOnInit(): void {
  }

}
