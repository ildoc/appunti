import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css']
})
export class DatabindingComponent {
    stringInterpolation = 'This is sting interpolation';
    numberInterpolation = 123;

    onClick(value: string){
        alert(value);
    }
}
