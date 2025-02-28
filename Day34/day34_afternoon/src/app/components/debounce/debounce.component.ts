import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-debounce',
  standalone: false,
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.css'
})
export class DebounceComponent implements OnInit{
  myForm:FormGroup = new FormGroup({
    name:new FormControl('')
  })

  subscription !: Subscription

  ngOnInit():void {
    this.subscription = this.myForm.valueChanges.pipe(
      debounceTime(3000)
    ).subscribe(value => {
      console.log(value)
    })
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe()
  }
}
