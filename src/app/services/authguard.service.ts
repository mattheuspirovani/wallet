import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from './user.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router, private _userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this._userService.getPin().then(pin => {
        if (!pin) {
          this._router.navigate(["onboarding"]);
          observer.next(false);
        }
        observer.next(true);
        observer.complete();
      });
    });
  }
}
