import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-card-list-item',
  styleUrls: ['./card-list-item.component.css'],
  template: `
    <mat-card class="card_base">
      <mat-card-header>
        <mat-card-title><h3>{{ cardData.cardNames[0].value_ }}</h3></mat-card-title>
      </mat-card-header>
      <img mat-card-image src="{{ cardData.largeImages[0].value_ }}" />
      <mat-card-footer>
        <h4>{{ cardData.card_type }}</h4>
      </mat-card-footer>
    </mat-card>
  `,
})
export class CardListItemComponent {
  @Input() cardData: any;
}
