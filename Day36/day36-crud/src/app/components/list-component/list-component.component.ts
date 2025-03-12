import { Component, inject, OnInit } from '@angular/core';
import { Particulars } from '../../model/particulars';
import { Observable } from 'rxjs';
import { ParticularsStore } from '../../store/particulars.store';

@Component({
  selector: 'app-list-component',
  standalone: false,
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})
export class ListComponentComponent implements OnInit{
  particulars$ !: Observable<Particulars[]>

  partStore = inject(ParticularsStore)

  ngOnInit(): void {
    this.loadParticulars()
    console.log(this.partStore.particulars$)
  }
  loadParticulars(){
    this.particulars$ = this.partStore.particulars$
    this.partStore.loadParticulars()
  }
}
