import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from 'src/app/models/Card';

const API_URL = 'http://localhost:8084';

@Injectable()
export class CardListService {
  constructor(private http: HttpClient) {}

  getAllCards() {
    return this.http.get<Card[]>(API_URL + '/cartas');
  }

  saveCard(cardData: Partial<Card>) {
    return this.http.post<Card>(API_URL + '/cartas', cardData);
  }

  getCardById({ cardId, lang }: { cardId: number; lang?: string }) {
    return this.http.get(API_URL + '/cartas' + cardId, { params: { lang } });
  }
}
