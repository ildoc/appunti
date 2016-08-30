import { Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  template: `
    <h1>User component</h1>
    <button (click)="onNavigate()">Go Home</button>
    <hr>
    {{id}}
    <hr>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class UserComponent implements OnDestroy {
    private subscription: Subscription;
    id: string;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.subscription = activatedRoute.params.subscribe(
            (param: any) => this.id = param['id']
        );
    }

    onNavigate() {
        this.router.navigate(['/'], {queryParams: {'analytics': '100'}});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
