import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { Room } from '../models/room.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // students: Student[] = [
  //   // new Student(1, "Fallou", "DIOP", new Date(), new Room()),
  //   // new Student(2, "Modou", "Fall", new Date(), new Room()),
  // ];

  constructor(private api: ApiService) { }

  getCount() {
    return 12;
  }

  getStudents():Observable<Student[]> {
    return this.api.getObjects('students');
  }

  getStudent(id: number):Observable<Student> {
    return this.api.getOneObject('students/' + id);
  }

  createStudent(student: Student):Observable<Student> {
    return this.api.insertOneObject('students/', student);
  }

  updateStudent(id: number, student: Student):Observable<Student> {
    return this.api.updateOneObject('students/' + id, student);  
  }

  deleteStudent(student: Student): Observable<Student> {
    return this.api.deleteOneObject('students/' + student.id);
  }
}
