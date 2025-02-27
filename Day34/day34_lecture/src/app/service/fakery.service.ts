import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { Photo } from '../model/photo.model';

@Injectable({
  providedIn: 'root'
})
export class FakeryService {

  constructor(private httpClient:HttpClient) { }

  private fakeryUrl:string = "https://jsonfakery.com/photos"

  getFakeryPhotos():Observable<Photo[]>{
    // try {
    //   const photos = await axios.get(this.fakeryUrl)
    //   return photos.data;  
    // } catch (error){
    //   console.error(error)
    // }

    // So long as the attributes are the same name, you can include the type in the generic <>
    return this.httpClient.get<Photo[]>(this.fakeryUrl)
  }
}
