import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interfaces/interface';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user!:User;

  baseUrl:string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  get user()
  {
    return{...this._user};
  }

  register(name:string, email:string, pw:string)
  {
    const url = `${this.baseUrl}/auth/new`;
    const body = {email, pw, name};
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(({ok, token})=>{
          if(ok)
          {
            localStorage.setItem('token', token!)
          }
        }),
        map(resp=>resp.ok),
        catchError(err=>of(err.error.msg))
      );
  }

  login(email:string, pw:string)
  {
    const url = `${this.baseUrl}/auth`;
    const body = {email, pw}
    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap(resp=>{
        if(resp.ok)
        {
          localStorage.setItem('token', resp.token!)
        }
      }),
      map(resp=>resp.ok),
      catchError(err=>of(err.error.msg))
    );
  }

  validateToken():Observable<boolean>
  {
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token')||'');
    return this.http.get<AuthResponse>(url, {headers})
      .pipe(
        map(resp =>{
          localStorage.setItem('token', resp.token!)
          this._user={
            name: resp.name!,
            uid: resp.uid!,
            email: resp.email!
          }
          return resp.ok;
        }),
        catchError(err=>of(false))
      );
  }

  logout()
  {
    localStorage.clear();
    // localStorage.removeItem('token');
  }
}
