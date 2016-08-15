import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: `
        <zippy title="lallallero">
            contenuto
        </zippy>
    `,
    directives: [ZippyComponent]
})
export class AppComponent {

}
