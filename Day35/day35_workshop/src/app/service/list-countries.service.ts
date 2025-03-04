import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListCountriesService {

  private countriesListSubject = new BehaviorSubject<Set<string>>(
    new Set(['Singapore','Kuala Lumpur','Tokyo'])
  )

  private countries$ = this.countriesListSubject.asObservable()

  addCountry(country:string):void{
    const currentList:Set<string> = this.countriesListSubject.getValue()
    currentList.add(country)
    this.countriesListSubject.next(currentList)
  }

  removeCountry(country:string):void{
    const currentList:Set<string> = this.countriesListSubject.getValue()
    currentList.delete(country)
    this.countriesListSubject.next(currentList)
  }

  getValues():Set<string>{
    return this.countriesListSubject.getValue()
  }
}
