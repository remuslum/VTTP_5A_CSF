import { Component, inject, OnInit } from '@angular/core';
import { ListServiceService } from './service/list-service.service';
import { ParticularsStore } from './store/particulars.store';
import { Particulars } from './model/particulars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'day36-crud';

  private listSvc = inject(ListServiceService)
  private partStore = inject(ParticularsStore)
  particulars!:Particulars[]

  async ngOnInit(): Promise<void> {
    this.particulars = await this.listSvc.getParticulars()
    this.particulars.forEach((part) => {
      console.log("adding particulars to indexedDB")
      this.partStore.addNewParticulars(part)
    })

  }
}
