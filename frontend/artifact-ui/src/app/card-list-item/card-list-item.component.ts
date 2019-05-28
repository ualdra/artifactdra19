import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-card-list-item',
  styleUrls: ['./card-list-item.component.css'],
  template: `
    <mat-card class="card_base">
      <mat-card-header>
        <mat-card-title>{{ cardData.cardNames[0].value_ }}</mat-card-title>
      </mat-card-header>
      <img mat-card-image src="{{ cardData.largeImages[0].value_ }}" />
      <mat-card-footer>
        <span class="card_footer">{{ cardData.card_type }}</span>
      </mat-card-footer>
    </mat-card>
  `,
})
export class CardListItemComponent {
  @Input() cardData: Card;
}
