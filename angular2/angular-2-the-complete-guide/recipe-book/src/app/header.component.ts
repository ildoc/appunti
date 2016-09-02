import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
