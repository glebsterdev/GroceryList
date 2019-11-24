export class Food {
	public static FoodTypes = [
		'Vegetables',
		'Fruits',
		'Herbs',
		'Spices',
		'Meat',
		'Canned Food',
		'Dairy'
	]

	public static FoodItems = [
		{ id: 'Leak', type: 'Vegetables', pakage: '' },
		{ id: 'Tomato', type: 'Vegetables', pakage: '' },
		{ id: 'Onion', type: 'Vegetables', pakage: '' },
		{ id: 'Green Onion', type: 'Vegetables', pakage: '' },
		{ id: 'Garlic', type: 'Vegetables', pakage: '' },
		{ id: 'Celery', type: 'Vegetables', pakage: '' },
		{ id: 'Carrot', type: 'Vegetables', pakage: '' },
		{ id: 'Red/Yellow Pepper', type: 'Vegetables', pakage: '' },
		{ id: 'Green Pepper', type: 'Vegetables', pakage: '' },
		{ id: 'Mushrooms', type: 'Vegetables', pakage: ' pack' },
		{ id: 'Sweet Potato', type: 'Vegetables', pakage: '' },

		{ id: 'Pasley', type: 'Herbs', pakage: ' bunch' },
		{ id: 'Coriander', type: 'Herbs', pakage: ' bunch' },

		{ id: 'Ground Beef', type: 'Meat', pakage: 'g' },
		{ id: 'Chicken Brest', type: 'Meat', pakage: 'g' },
		{ id: 'Sausages', type: 'Meat', pakage: '' },

		{ id: 'Diced Tomatoes', type: 'Canned Food', pakage: ' can' },
		{ id: 'Crushed Tomatoes', type: 'Canned Food', pakage: ' can' },
		{ id: 'Mixed Beans', type: 'Canned Food', pakage: ' can' },
		{ id: 'White Beans', type: 'Canned Food', pakage: ' can' },
	]
}

export class GroceryGroupDisplay {
	title: string
	items: GroceryItemDisplay[]
}

export class GroceryItemDisplay {
	title: string
	quantity: string
}

export class GroceryItem {
	id: string
	quantity: number

	// constructor(
	// 	id: number,
	// 	quantity: number) {
	// 		this.id = id
	// 		this.quantity = quantity
	// }
}

export class Recipe {
	id: number
	title: string
	steps: string[]
	ingredients: GroceryItem[]

	// constructor(
	// 	id: number,
	// 	title: string,
	// 	steps: string[],
	// 	ingredients: GroceryItem[]) {
	// 		this.id = id
	// 		this.title = title
	// 		this.steps = steps
	// 		this.ingredients = ingredients
	// }
}


