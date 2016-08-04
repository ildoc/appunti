import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';

@Component({
    selector: 'tweets',
    template: `
    <div *ngFor="#tweet of tweets">
        <tweet
            [tweet]="tweet">
        </tweet>
    </div>
    `,
    providers: [TweetService],
    directives: [TweetComponent]
})

export class TweetsComponent {
    tweets;

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}
