import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):
  MaybeAsync<GuardResult>{
    alert("You are not allowed to access this page as it is undergoing development")
    this.router.navigate(['home'])
    return false
  }
}
