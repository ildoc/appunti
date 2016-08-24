import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClick()">click me</button>
  `,
  styles: []
})
export class EventBindingComponent {
    @Output('clickable') clicked = new EventEmitter<string>();

    onClick(){
        this.clicked.emit('It works');
    }
}
