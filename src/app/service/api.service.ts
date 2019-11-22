import { Injectable } from '@angular/core';
import { Observable,of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './../user/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	baseUri:string = 'http://www.laravel-angular.com/api/v1/user';
  	constructor(private http: HttpClient) { }

	getUsers (): Observable<User[]> {
		return this.http.get<User[]>(this.baseUri).pipe(
			catchError(this.handleError('getUsers', [])),
		);
	}

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			return of(result as T);
		};
	}
}
