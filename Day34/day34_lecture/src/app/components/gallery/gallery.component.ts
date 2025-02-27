import { Component } from '@angular/core';
import { FakeryService } from '../../service/fakery.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  constructor(private fakeSvc:FakeryService){}

  photos:any[] = []

  ngOnInit():void {
    // this.fakeSvc.getFakeryPhotos().then(
    //   (photo) => {
    //     this.photos.push(photo);
    //   }
    // ).catch(
    //   (error) => console.error(error)
    // )
    this.fakeSvc.getFakeryPhotos().subscribe({
      next : (photo) => {
        this.photos.push(...photo)
      },
      error : (error) => {
        console.error(error)
      }
    })
  }
}
