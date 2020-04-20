import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { HistoryComponent } from './components/history/history.component';
import { ChangeComponent } from './components/change/change.component';


const routes: Routes = [
  {
    path: '',
    component: DetailComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'change',
    component: ChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRoutingModule { }
