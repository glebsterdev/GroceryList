import { Component, OnInit, Input, Output, Inject } from '@angular/core'
import { AppComponent } from '../app.component'
import { GroceryItemDisplay } from '../model/model'

@Component({
	selector: 'app-grocery-card',
	templateUrl: './grocery-card.component.html',
	styleUrls: ['./grocery-card.component.scss']
})
export class GroceryCardComponent {

	@Input('grocery') grocery: GroceryItemDisplay = new GroceryItemDisplay()

	constructor(@Inject(AppComponent) public appComponent: AppComponent) { }

	clicked() {
		this.appComponent.itemSelected(this.grocery.title)
	}
}
