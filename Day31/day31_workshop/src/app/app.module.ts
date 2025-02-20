import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberImageComponent } from './components/number-image.component';
import { NavigatorComponent } from './components/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberImageComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
