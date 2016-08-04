import {Component, Input, EventEmitter} from 'angular2/core';

@Component({
    selector: 'heart',
    templateUrl: 'app/heart.template.html',
})



export class HeartComponent{
    @Input() count = 0;
    @Input() isClicked = false;

    onClick(){
        this.isClicked = !this.isClicked;
        if(this.isClicked)
            this.count++;
        else
            this.count--;
    }

}
