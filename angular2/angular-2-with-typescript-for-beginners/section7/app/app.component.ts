import {Component} from 'angular2/core';
import {ChangePwComponent} from './changepw-form.component';

@Component({
    selector: 'my-app',
    template: '<changepw-form></changepw-form>',
    directives: [ChangePwComponent]
})
export class AppComponent {

}
