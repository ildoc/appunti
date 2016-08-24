import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>lalllaero</h1>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
        <p>{{test}}</p>
        <hr>
        <p>{{boundValue}}</p>
    </app-lifecycle>
    <button (click)="delete = true">Click to delete</button>
    <button (click)="test='changed value'">Click to change</button>
    <button (click)="boundValue=2000">Click to change binding</button>
    `
})
export class AppComponent {
    delete = false;
    test="starting value";
    boundValue=1000;
}
