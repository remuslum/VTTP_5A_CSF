import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"add-to-do",component:AddToDoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
