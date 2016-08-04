import {Component} from 'angular2/core';

@Component({
    selector: 'star',
    template: `
        <i class="glyphicon"
            [class.glyphicon-star]="isClicked"
            [class.glyphicon-star-empty]="!isClicked"
            (click)="onClick()"
        ></i>
    `
})

export class StarComponent {
    isClicked: boolean;
    onClick(){
        this.isClicked = !this.isClicked;
    }

    constructor(){
        this.isClicked = false;
    }
}
