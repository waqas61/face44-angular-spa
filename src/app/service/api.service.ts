import { Injectable } from '@angular/core';
import { Observable,of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './../user/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	baseUri:string = 'http://www.face44-laravel-api.com/api/user';
  	constructor(private http: HttpClient) { }

	httpOptions = {
	  headers: new HttpHeaders({'Content-Type': 'application/json'})
	};

	getUsers (): Observable<User[]> {
		return this.http.get<User[]>(this.baseUri).pipe(
			catchError(this.handleError('getUsers', [])),
		);
	}


	addUser (user): Observable<User> {

	  return this.http.post<User>(this.baseUri, user, this.httpOptions).pipe(
	    catchError(this.handleError<User>('addUser'))
	  );
	}


	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			return of(result as T);
		};
	}
}
