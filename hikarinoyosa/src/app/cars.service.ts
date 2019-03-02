import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Cars } from './models/cars.model';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private carsUrl = "http://localhost:8080/cars/cars/findAll";
  private carsUrlPost = "http://localhost:8080/cars/cars/create";
  private carsUrlDelete = "http://localhost:8080/cars/cars/delete";
  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
  getCars():Observable<Cars[]>{
    return this.http.get<Cars[]>(this.carsUrl);
  }
  addCars (cars: Cars): Observable<Cars> {
    return this.http.post<Cars>(this.carsUrlPost, cars, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteCars (id: string): Observable<{}> {
    const url = `${this.carsUrlDelete}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getCarsById(id: number): Observable<Cars> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Cars>(url).pipe(
      tap(),
      catchError(this.handleError)
    );
  }
  
}
