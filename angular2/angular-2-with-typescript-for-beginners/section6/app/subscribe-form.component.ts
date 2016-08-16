import {Component} from 'angular2/core';

@Component({
    selector: 'subscribe-form',
    templateUrl: 'app/subscribe-form.template.html'
})
export class SubscribeFormComponent {
    onSubmit(form){
        console.log(form);
    }
}
