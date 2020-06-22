import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedsComponent } from './components/breeds/breeds.component';


const routes: Routes = [
  { path: 'breeds', component: BreedsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
