import { Component, OnInit, Input, Output, Inject } from '@angular/core'
import { AppComponent } from '../app.component'
import { Recipe } from '../model/model'

@Component({
	selector: 'app-recipe-card',
	templateUrl: './recipe-card.component.html',
	styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {

	@Input('recipe') recipe: Recipe = new Recipe()

	constructor(@Inject(AppComponent) public appComponent: AppComponent) { }

	clicked() {
		this.appComponent.recipeSelected(this.recipe.id)
	}

}
