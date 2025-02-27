import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-list-employee',
  standalone: false,
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {
  employees!:Employee[]

  constructor(private employeeSvc:EmployeeService){}

  ngOnInit():void {
    this.employeeSvc.getAll().subscribe(
      (data : Employee[]) => this.employees = data
    )
  }
}
