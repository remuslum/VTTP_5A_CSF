import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { provideHttpClient } from '@angular/common/http';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FileUploadComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
