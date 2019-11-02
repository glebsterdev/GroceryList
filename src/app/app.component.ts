import { Component, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { ServiceComponent } from './services/service.component'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	shoppingCart = [
		{title: 'Vegetables', items: [
			{title: 'Tomato', quantity: '3'},
			{title: 'Leak', quantity: '2'}
		]},
		{title: 'Meat', items: [
			{title: 'Steak', quantity: '100g'},
			{title: 'Chicken', quantity: '200g'}
		]}
	]
}
