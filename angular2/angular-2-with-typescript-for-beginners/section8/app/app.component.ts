import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form.control" placeholder="Search">
    `
})
export class AppComponent {
    constructor(){
        var keyups = Observable.fromEvent($("#search"), "keyup")
        .map(e => e.target.value)
        .filter(text => text.length >= 3)
        .debounceTime(400)
        .distinctUntilChanged()
        .flatMap(searchTerm => {
            var url = "https://api.spotify.com/v1/search/?type=artist&q=" + searchTerm;
            var promise = $.getJSON(url);
            return Observable.fromPromise(promise);
        });

        var subscription = keyups.subscribe(data => console.log(data));
        subscription.unsubscribe();
    }
}
