import { Component, OnInit, Input, Output, Inject } from '@angular/core';

export class Item {
  title: string
  quantity: string
}

@Component({
  selector: 'app-grocery-card',
  templateUrl: './grocery-card.component.html',
  styleUrls: ['./grocery-card.component.scss']
})
export class GroceryCardComponent {

  @Input('item') item: Item = new Item()

  constructor() { }

}
