import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import { SingleRoomComponent } from './single-room/single-room.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'sys',
    component: ComponentsComponent,
    children: [
      { path: 'students', component: ListStudentsComponent},
      { path: 'students/:mode/:id', component: SingleStudentComponent},
      { path: 'rooms', component: ListRoomsComponent},
      { path: 'rooms/:mode/:id', component: SingleRoomComponent},
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: '/sys/home', pathMatch: 'full'},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
