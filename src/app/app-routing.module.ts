import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CustomerLayoutComponent } from './layout/customer/customer-layout/customer-layout.component';
import { HomeComponent } from './component/home/home.component';
import { ChangeProfileComponent } from './component/change-profile/change-profile.component';
import { AdminLayoutComponent } from './layout/admin/admin-layout/admin-layout.component';
import { AddScheduleComponent } from './component/add-schedule/add-schedule.component';
import { BusManagementComponent } from './component/bus-management/bus-management.component';
import { ScheduleManagementComponent } from './component/schedule-management/schedule-management.component';
import { PayScreenComponent } from './component/pay-screen/pay-screen.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: 'customer', component: CustomerLayoutComponent, children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'change-profile',
        component: ChangeProfileComponent
      }
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'change-profile',
        component: ChangeProfileComponent
      },
      {
        path: 'bus-management',
        component: BusManagementComponent
      },
      {
        path: 'schedule-management',
        component: ScheduleManagementComponent
      },
      {
        path: 'pay-screen',
        component: PayScreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
