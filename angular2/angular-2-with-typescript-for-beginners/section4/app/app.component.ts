import {Component} from 'angular2/core';
import {TweetsComponent} from './tweets.component';

@Component({
    selector: 'my-app',
    template: '<tweets></tweets>',
    directives: [TweetsComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        userVote: 0,
        totalVotes: 10
    }

    onVote($event){
        console.log($event);
    }
}
