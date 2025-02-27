import { Component } from '@angular/core';
import { FakeryService } from '../../service/fakery.service';
import { Photo } from '../../model/photo.model';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  constructor(private fakeSvc:FakeryService){}

  photos:Photo[] = []

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
        for(let i = 0; i < 30; i++){
          this.photos.push(photo[i])
        }
      },
      error : (error) => {
        console.error(error)
      }
    })
  }
}
