import {Component, Input} from 'angular2/core';
import {Tweet} from './tweet';
import {HeartComponent} from './heart.component';

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.template.html',
    directives: [HeartComponent]
})

export class TweetComponent{
    @Input() tweet: Tweet;
}
