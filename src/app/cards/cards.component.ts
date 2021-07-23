import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardContent: any;
  @Input() cardImageLocation: any;

  constructor() {
    this.cardContent = [
      { "name": "cardTitle 1", "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": "cardTitle 2", "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": "cardTitle 3", "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": "cardTitle 4", "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": "cardTitle 5", "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": "cardTitle 6", "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": "cardTitle 7", "description": "Some quick example text to build on the card title and make up the bulkof the card's content." }
    ]
  }

  ngOnInit(): void {
  }

}
