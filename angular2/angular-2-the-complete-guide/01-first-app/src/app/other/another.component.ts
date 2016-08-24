import { Component } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <article>
        <ng-content></ng-content>
    </article>
  `,
  styles: [`
      border: 1px solid black;
      `]
})
export class AnotherComponent {

}
