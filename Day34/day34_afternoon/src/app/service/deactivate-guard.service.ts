import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService implements CanDeactivate<any> {

  constructor(private router:Router) { }

  canDeactivate(component:any, currentRoute:ActivatedRouteSnapshot,
    currentState:RouterStateSnapshot,nextState:RouterStateSnapshot):MaybeAsync<GuardResult>{
      return component.canExit()
  }
  
}
