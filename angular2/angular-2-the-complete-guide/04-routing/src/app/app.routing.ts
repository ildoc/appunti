import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user'
import { HomeComponent } from './home-component.component';
import { USER_ROUTES } from './user/user.routing';

const APP_ROUTES: Routes = [
    { path: 'user/:id', component: UserComponent },
    { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '/user/1', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
