import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { ErrorComponentComponent } from './core/components/error-component/error-component.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: 'dashboard',
      component: AppDashboardComponent
    },
    {
      path: '404',
      component: ErrorComponentComponent
    },
    {
      path: '**',
      redirectTo: '/404',
      pathMatch: 'full',
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
