import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate{

  constructor(private authService:AuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      return this.authService.verifyAuth()
      .pipe(
        tap( isAuthenticated => {
          if(!isAuthenticated)
          {
            this.router.navigate(['./auth/login'])
          }
        } )
      )
      
      // let credentials:boolean;

      // (this.authService.auth.id)? credentials=true: credentials=false;
      
      // return credentials;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean{
      
      return this.authService.verifyAuth()
      .pipe(
        tap( isAuthenticated => {
          if(!isAuthenticated)
          {
            this.router.navigate(['./auth/login'])
          }
        } )
      )
      
      // let credentials:boolean;

      // (this.authService.auth.id)? credentials=true: credentials=false;

      // return credentials;
  }
}
