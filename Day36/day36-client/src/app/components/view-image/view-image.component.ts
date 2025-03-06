import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UploadService } from '../../service/upload.service';

@Component({
  selector: 'app-view-image',
  standalone: false,
  templateUrl: './view-image.component.html',
  styleUrl: './view-image.component.css'
})
export class ViewImageComponent implements OnInit {
  postId:string = ""
  param$ !: Subscription
  imageData: any

  private actRoute = inject(ActivatedRoute)
  private fileUploadSvc = inject(UploadService)

  ngOnInit(): void {
    this.param$ = this.actRoute.params.subscribe(
      async (params) => {
        this.postId = params['postId']
        let r = await this.fileUploadSvc.getImage(this.postId)
        this.imageData = r.image
      }
    )
  }
}
