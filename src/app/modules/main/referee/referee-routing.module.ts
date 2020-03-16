import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { RefereeComponent } from './components/referee/referee.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'detail/:id',
    component: RefereeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefereeRoutingModule { }
