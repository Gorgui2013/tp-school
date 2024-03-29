import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private apiUrl = "http://localhost:8080/api/";
  private apiUrl = "https://api-tp-school.herokuapp.com/api/";

  constructor(private http: HttpClient) { }

  getObjects(endpoint: string):Observable<any> {
    return this.http.get(this.apiUrl + endpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getOneObject(endpoint: string):Observable<any> {
    return this.http.get(this.apiUrl + endpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Observable
  insertOneObject(endpoint: string, data: object) {
    return this.http.post(this.apiUrl + endpoint, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Observable
  updateOneObject(endpoint: string, data: object) {
    return this.http.put(this.apiUrl + endpoint, data)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  // Observable
  deleteOneObject(endpoint: string) {
    return this.http.delete(this.apiUrl + endpoint)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
