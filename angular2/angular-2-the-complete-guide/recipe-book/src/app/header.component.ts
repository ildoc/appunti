import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { }

  onStore() {
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onFetch() {
    this.recipeService.fetchData();
  }

}
