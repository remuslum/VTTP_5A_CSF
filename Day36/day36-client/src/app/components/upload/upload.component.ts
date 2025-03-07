import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadService } from '../../service/upload.service';
import { Observable } from 'rxjs';
import { City } from '../../model/city';
import { CityStore } from '../../store/city.store';

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
  private cityStore = inject(CityStore)

  citiesList$ !: Observable<City[]>
  selectedCity?:string

  ngOnInit(): void {
    this.createForm();
    this.loadCities();
  }

  createForm():void {
    this.form = this.formBuilder.group({
      comments : this.formBuilder.control<string>('')
    })
  }

  uploadCities(){
    console.log(this.selectedCity)

    this.citiesList$.subscribe((cities) => {
      const city = cities.find((city) => city.code === this.selectedCity)
      console.log(city?.city_name)
      this.selectedCity = city?.city_name
    })
  }

  upload() {
    this.uploadCities()
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

  loadCities() {
    this.citiesList$ = this.cityStore.cities$
    this.cityStore.loadCities()
  }


}
