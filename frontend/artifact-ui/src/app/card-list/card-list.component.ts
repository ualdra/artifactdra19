import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { CardListService } from 'src/app/services/cardList.service';

@Component({
  selector: 'app-card-list',
  styleUrls: ['./card-list.component.css'],
  template: `
    <div class="cards_list">
      <span class="cards_list_title">Lista de cartas de la aplicación</span>
      <div *ngIf="cards.length" class="cards_list_helper">
        <app-card-list-item *ngFor="let card of cards" [cardData]="card"></app-card-list-item>
      </div>
    </div>
  `,
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];
  constructor(private cardListService: CardListService) {}

  ngOnInit(): void {
    this.cardListService.getAllCards().subscribe(cards => (this.cards = cards));
  }
}
