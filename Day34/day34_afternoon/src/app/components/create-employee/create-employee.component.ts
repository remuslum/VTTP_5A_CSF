import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit{
  form!:FormGroup

  constructor(private formBuilder:FormBuilder, private employeeSvc:EmployeeService){ }

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        firstName:this.formBuilder.control<string>('',[Validators.required]),
        lastName:this.formBuilder.control<string>('',[Validators.required]),
        emailId:this.formBuilder.control<string>('',[Validators.required])
      })
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
