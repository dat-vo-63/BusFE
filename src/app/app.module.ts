import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDatepickerModule, NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { CustomerLayoutComponent } from './layout/customer/customer-layout/customer-layout.component';
import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ChangeProfileComponent } from './component/change-profile/change-profile.component';
import { AdminLayoutComponent } from './layout/admin/admin-layout/admin-layout.component';
import { AddScheduleComponent } from './component/add-schedule/add-schedule.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MatSelectModule } from '@angular/material/select';
import { BusListComponent } from './component/bus-list/bus-list.component';
import { CreateNewBusComponent } from './component/create-new-bus/create-new-bus.component';
import { EditBusInfoComponent } from './component/edit-bus-info/edit-bus-info.component';
import { BusManagementComponent } from './component/bus-management/bus-management.component';
import { ListScheduleComponent } from './component/list-schedule/list-schedule.component';
import { ScheduleManagementComponent } from './component/schedule-management/schedule-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    CustomerLayoutComponent,
    ChangeProfileComponent,
    AdminLayoutComponent,
    AddScheduleComponent,
    BusListComponent,
    CreateNewBusComponent,
    EditBusInfoComponent,
    BusManagementComponent,
    ListScheduleComponent,
    ScheduleManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbTimepickerModule,
    JsonPipe,
    TimepickerModule,
    MatSelectModule,
    NgbDatepickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
