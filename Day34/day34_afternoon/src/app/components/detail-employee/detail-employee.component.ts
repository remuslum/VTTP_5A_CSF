import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-employee',
  standalone: false,
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.css'
})
export class DetailEmployeeComponent implements OnInit{
  employee:Employee = new Employee()

  constructor(private employeeSvc:EmployeeService, private router:Router, 
    private activatedRoute:ActivatedRoute){ }

    ngOnInit():void {
      const employeeId = Number(this.activatedRoute.snapshot.paramMap.get('employeeId'))
      this.employeeSvc.getById(employeeId).subscribe({
        next : (data) => Object.assign(this.employee,data),
        error: (error) => console.error(error)
      })
    }

    protected backToList():void{
      this.router.navigate(['/employeeslist'])
    }
}
