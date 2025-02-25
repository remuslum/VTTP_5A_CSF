import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
