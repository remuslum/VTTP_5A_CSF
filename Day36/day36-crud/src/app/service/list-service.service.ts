import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Particulars } from '../model/particulars';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  private httpClient = inject(HttpClient)

  getParticulars(){
    return lastValueFrom(this.httpClient.get<Particulars[]>("/api/particulars"))
  }

}
