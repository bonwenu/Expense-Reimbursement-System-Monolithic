import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateRequestsComponent } from './components/create-requests/create-requests.component';
import { EmployeeHomeComponent } from './components/employee-home/employee-home.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EPendingRequestsComponent } from './components/e-pending-requests/e-pending-requests.component';
import { EProcessedRequestsComponent } from './components/e-processed-requests/e-processed-requests.component';
import { MPendingRequestsComponent } from './components/m-pending-requests/m-pending-requests.component';
import { MProcessedRequestsComponent } from './components/m-processed-requests/m-processed-requests.component';
import { SpecifyEmployeeComponent } from './components/specify-employee/specify-employee.component';
import { ManagerRequestsMainComponent } from './components/manager-requests-main/manager-requests-main.component';


const routes: Routes = [
  {
    path: "all-employees",
    component: EmployeeListComponent  
  },
  {
    path: "create-new-request",
    component: CreateRequestsComponent
  },
  {
    path: "eHome",
    component: EmployeeHomeComponent
  },
  {
    path: "mHome",
    component: ManagerHomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "employee-pending",
    component: EPendingRequestsComponent
  },
  {
    path: "employee-processed",
    component: EProcessedRequestsComponent
  },
  {
    path: "manager-pending",
    component: MPendingRequestsComponent
  },
  {
    path: "manager-processed",
    component: MProcessedRequestsComponent
  },
  {
    path: "manager-requests-main",
    component: ManagerRequestsMainComponent
  },
  {
    path: "specify-employee",
    component: SpecifyEmployeeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
