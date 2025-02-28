import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ListEmployeeComponent } from '../components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from '../components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from '../components/update-employee/update-employee.component';
import { DetailEmployeeComponent } from '../components/detail-employee/detail-employee.component';
import { RouteGuardService } from '../service/route-guard.service';
import { DeactivateGuardService } from '../service/deactivate-guard.service';
import { TestComponent } from '../components/test/test.component';
import { DebounceComponent } from '../components/debounce/debounce.component';
import { ExampleComponent } from '../components/example/example.component';

const routes:Routes = [
  {path:"employeeslist",component:ListEmployeeComponent},
  {path:"employeeCreate",component:CreateEmployeeComponent},
  {path:"updateEmployee/:employeeId",component:UpdateEmployeeComponent},
  // {path:"updateEmployee/:employeeId",component:UpdateEmployeeComponent,canActivate:[RouteGuardService]},
  {path:"detailemployee/:employeeId",component:DetailEmployeeComponent},
  {path:"test",component:TestComponent, canDeactivate:[DeactivateGuardService]},
  {path:"debounce",component:DebounceComponent},
  {path:"example",component:ExampleComponent},
  {path:"**",redirectTo:"/",pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
