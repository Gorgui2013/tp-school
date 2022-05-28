import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsComponent } from './components.component';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import { SingleRoomComponent } from './single-room/single-room.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ComponentsRoutingModule } from './components-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoresModule } from '../cores/cores.module';

@NgModule({
  declarations: [
    ComponentsComponent,
    ListRoomsComponent,
    SingleRoomComponent,
    ListStudentsComponent,
    SingleStudentComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoresModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
