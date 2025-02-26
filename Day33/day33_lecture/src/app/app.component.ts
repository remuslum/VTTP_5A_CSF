import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from './components/view-child/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'day33_lecture';

  isShow:boolean = false;

  @ViewChild(ViewChildComponent) childComponent!: ViewChildComponent;

  @ViewChild("myImg") imageElement : ElementRef | undefined

  ngOnInit():void{
    this.isShow = true;
  }
  changeChildText(){
    this.childComponent.changeText()
  }

}
