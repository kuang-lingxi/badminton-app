import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './components/sign/sign.component';
import { OperateComponent } from './components/operate/operate.component';
import { ArrangeComponent } from './components/arrange/arrange.component';


const routes: Routes = [
  {
    path: '',
    component: SignComponent
  },
  {
    path: 'operate/:id',
    component: OperateComponent
  },
  {
    path: 'arrange/:id',
    component: ArrangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignRoutingModule { }
