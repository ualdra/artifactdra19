import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { CardListService } from 'src/app/services/cardList.service';

@Component({
  selector: 'app-card-list',
  styleUrls: ['./card-list.component.css'],
  template: `
  
    <div class="cards_list">
      <span class="cards_list_title">Lista de cartas de la aplicación</span>
      <input id="search-box" placeholder="Busca tu Carta" type="text" matInput [(ngModel)]="searchTerm"/> 
      <div *ngIf="cards.length" class="cards_list_helper">
        <app-card-list-item *ngFor="let card of cards | filter : searchTerm" [cardData]="card"></app-card-list-item>
      </div>
    </div>
  `,
})
export class CardListComponent implements OnInit {
  cards: any[] = [];
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private cardListService: CardListService) {}

  searchTerm = '';

  onSearchChange() {
    this.searchEvent.emit(this.searchTerm);
  }

  ngOnInit(): void {
    this.cardListService.getAllCards().subscribe((data: any) => {
      data._embedded.cartas.forEach(element => {
        this.cardListService.getCardByURL(element._links.self.href).subscribe((carta: any) => {
          this.cardListService.getCardImages(element._links.largeImages.href).subscribe((imagenes: any) => {
            let cardAux ={
              cardNames: carta._embedded.cardNames,
              illustrator: element.illustrator,
              card_type: element.card_type,
              rarity: element.rarity,
              item_def: element.item_def,
              largeImages: imagenes._embedded.largeImages
            } 
            this.cards.push(cardAux);

          });
          
        });
      });
    });
  }
}
