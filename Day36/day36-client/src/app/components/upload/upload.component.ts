import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadService } from '../../service/upload.service';

@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent implements OnInit{
  form!:FormGroup;
  dataUri!:string;
  blob!:Blob;

  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private fileUploadSvc = inject(UploadService);

  ngOnInit(): void {
    this.createForm();
  }

  createForm():void {
    this.form = this.formBuilder.group({
      comments : this.formBuilder.control<string>('')
    })
  }

  upload() {
    console.log(this.dataUri)
    if(!this.dataUri){
      return
    }
    this.blob = this.dataURItoBlob(this.dataUri)
    const formValue = this.form.value

    console.log("Hello")
    this.fileUploadSvc.upload(formValue, this.blob).then(result => {
      console.log(result)
      this.router.navigate(['/image',result.postId])
    })
  }

  onFileChange(event:Event){
    console.log("On file change");
    const input = event.target as HTMLInputElement
    if(input.files && input.files.length > 0){
      const files = input.files[0]
      console.log(files)
      const reader = new FileReader()
      reader.onload = () => {
        this.dataUri = reader.result as string
        console.log(this.dataUri)
      }
      
      reader.readAsDataURL(files)
    }
  }

  // Boilerplate code
  dataURItoBlob(dataURI: string): Blob{
    const [meta, base64Data] = dataURI.split(',');
    const mimeMatch = meta.match(/:(.*?);/);

    const mimeType = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
    const byteString = atob(base64Data);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for(let i = 0; i < byteString.length; i++){
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type: mimeType});
  }


}
