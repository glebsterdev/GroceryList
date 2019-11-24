import { Component, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { ServiceComponent } from './services/service.component'
import { GroceryItem, Recipe } from './model/model'
import { Utils } from './model/utils'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	list1: GroceryItem[]  = []
	list2: GroceryItem[]  = []

	toBuyItems = Utils.getGroupDisplay(this.list1)
	purchasedItems = Utils.getGroupDisplay(this.list2)

	allRecipes: Recipe[] = [
		{
			id: 0,
			title: 'Mexican stew with sausages',
			steps: ['Preheat oven at 195C (380F)', 'In a large saucepan'],
			ingredients: [
				{id: 'Sausages', quantity: 3},
				{id: 'Garlic', quantity: 2},
				{id: 'Red/Yellow Pepper', quantity: 1},
				{id: 'Mushrooms', quantity: 1},
				{id: 'Sweet Potato', quantity: 1},
				{id: 'Onion', quantity: 1},
				{id: 'Green Onion', quantity: 2},
				{id: 'Diced Tomatoes', quantity: 1},
				{id: 'White Beans', quantity: 1},
				{id: 'Coriander', quantity: 1},
			]
		},
		{
			id: 1,
			title: 'Beef Stew',
			steps: ['Cook chicken', 'Serve chicken'],
			ingredients: [
				{id: 'Leak', quantity: 2},
				{id: 'Onion', quantity: 1},
				{id: 'Ground Beef', quantity: 200},
			]
		}
	]
	favoriteRecipes: Recipe[] = []
	selectedRecipes: Recipe[] = []

	itemSelected(itemTitle: string){
		Utils.swapLists(itemTitle, this.list1, this.list2)
		this.toBuyItems = Utils.getGroupDisplay(this.list1)
		this.purchasedItems = Utils.getGroupDisplay(this.list2)
	}

	recipeSelected(id: number) {
		this.selectedRecipes.push(this.allRecipes.find(i => i.id == id))
		Utils.addListToList(this.list1, this.allRecipes.find(i => i.id == id).ingredients)
		this.toBuyItems = Utils.getGroupDisplay(this.list1)
		this.purchasedItems = Utils.getGroupDisplay(this.list2)
	}

	addGrocery() {
		
	}
}
