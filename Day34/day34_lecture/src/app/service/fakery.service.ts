import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeryService {

  constructor(private httpClient:HttpClient) { }

  private fakeryUrl:string = "https://jsonfakery.com/photos"

  getFakeryPhotos():Observable<any>{
    // try {
    //   const photos = await axios.get(this.fakeryUrl)
    //   return photos.data;  
    // } catch (error){
    //   console.error(error)
    // }
    return this.httpClient.get(this.fakeryUrl)
    
  }
}
