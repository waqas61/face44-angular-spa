import { Injectable } from '@angular/core';
import { Observable,of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './../user/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	baseUri:string = 'http://127.0.0.1:8000/api/user';
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

	getUser (id,user): Observable<any> {
		const url = `${this.baseUri}/${id}`;
	  	return this.http.get<User>(url, user, this.httpOptions).pipe(
	    	catchError(this.handleError<any>('editUser'))
	  	);
	}

	updateUser (id, user): Observable<any> {
	  const url = `${this.baseUri}/${id}`;
	  return this.http.put(url, user, this.httpOptions).pipe(
	    catchError(this.handleError<any>('updateUser'))
	  );
	}


	deleteUser (id): Observable<User> {
	  const url = `${this.baseUri}/${id}`;

	  return this.http.delete<User>(url, this.httpOptions).pipe(
	    catchError(this.handleError<User>('deleteUser'))
	  );
	}
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			return of(result as T);
		};
	}
}
