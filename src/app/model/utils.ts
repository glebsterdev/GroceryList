import { GroceryItem, GroceryItemDisplay, GroceryGroupDisplay, Food } from './model'

export class Utils {
	static addListToList(items: GroceryItem[], itemsToAdd: GroceryItem[]) {
		for (let i of itemsToAdd) {
			this.addById(items, i)
		}
	}

	static addById(items: GroceryItem[], item: GroceryItem) {
		if (items.findIndex(i => i.id == item.id) == -1) {
			items.push({ id: item.id, quantity: item.quantity })
		} else {
			var i = items.find(x => x.id == item.id)
			i.quantity += item.quantity
		}
	}

	// static addById(items: GroceryItem[], foodId: number, quantity: number) {
	// 	if (items.findIndex(i => i.id == foodId) == -1) {
	// 		items.push({ id: foodId, quantity: quantity })
	// 	} else {
	// 		var i = items.find(x => x.id == foodId)
	// 		i.quantity += quantity
	// 	}
	// }

	static removebyId(items: GroceryItem[], foodId: string) {
		items = items.filter(x => x.id != foodId)
	}

	static removeByTitle(items: GroceryItem[], foodId: string) {
		items = items.filter(x => x.id != foodId)
	}

	static getGroupDisplay(items: GroceryItem[]): GroceryGroupDisplay[] {
		var groupDisplays: GroceryGroupDisplay[] = []
		for (let i of items) {
			var food = Food.FoodItems.find(x => x.id == i.id)
			var itemDisplay = { title: food.id, quantity: i.quantity + food.pakage }

			if (groupDisplays.findIndex(i => i.title == food.type) == -1) {
				groupDisplays.push({ title: food.type, items: [itemDisplay] })
			} else {
				groupDisplays.find(x => x.title == food.type).items.push(itemDisplay)
			}
		}
		return groupDisplays
	}

    static swapLists(foodId: string, list1: GroceryItem[], list2: GroceryItem[]){
		if(list1.findIndex(i => i.id == foodId) == -1){
			if(list2.findIndex(i => i.id == foodId) == -1){
				console.log("Error")
			} else{
				list1.push({id: foodId, quantity: list2.find(i => i.id == foodId).quantity})
                list2.splice(list2.findIndex(i => i.id == foodId), 1)
			}
		} else if(list2.findIndex(i => i.id == foodId) == -1){
			if(list1.findIndex(i => i.id == foodId) == -1){
				console.log("Error")
			} else{
				list2.push({id: foodId, quantity: list1.find(i => i.id == foodId).quantity})
                list1.splice(list1.findIndex(i => i.id == foodId), 1)
			}
		}
	}
}