import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string = environment.apiUrl

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl)
    // return firstValueFrom(this.httpClient.get<Employee[]>(this.baseUrl))
  }

  getById(id:number):Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseUrl + '/' + id)
  }

  create(employee:Employee):Observable<Object> {
    return this.httpClient.post<Employee>(this.baseUrl, employee)
  }

  updateById(id:number, employee:Employee):Observable<Object> {
    return this.httpClient.put(this.baseUrl + '/' + id,employee)
  }

  deleteById(id:number):Observable<Object>{
    return this.httpClient.delete(this.baseUrl + '/' + id)
  }
}
