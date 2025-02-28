import { Component, inject } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  constructor(private activatedRoute:ActivatedRoute, private employeeSvc:EmployeeService){ }

  employeeToUpdate:Employee = new Employee()

  form!:FormGroup

  ngOnInit():void {
    this.form = new FormGroup({
      firstName:new FormControl(""),
      lastName:new FormControl(""),
      emailId:new FormControl("")
    })
    
    const employeeId:number = Number(this.activatedRoute.snapshot.paramMap.get('employeeId'))
    this.employeeSvc.getById(employeeId).subscribe(
      data => {
        Object.assign(this.employeeToUpdate,data)
        this.form.patchValue(this.employeeToUpdate)
      }
    )
    console.log(this.form.value)
    console.log(this.employeeToUpdate)
  }

  protected postEmployee(){
    const employee:Employee = this.form.value
    console.log(employee)
    this.employeeSvc.create(employee).subscribe({
      next : (data) => console.log('Success'),
      error: (error) => console.log('Failure')
    })
  }

  
}
