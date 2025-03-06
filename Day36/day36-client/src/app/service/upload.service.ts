import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Upload } from '../model/upload';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private httpClient = inject(HttpClient);

  upload(form:any, image: Blob){
    const formData = new FormData();
    formData.set('file',image);
    formData.set("comments", form["comments"]);

    return lastValueFrom(this.httpClient.post<Upload>("/api/upload",formData));
  }

  getImage(postId:string){
    return lastValueFrom(this.httpClient.get<Upload>(`/api/get-image/${postId}`))
  }
}
