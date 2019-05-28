import { CardName } from 'src/app/models/CardName';
import { LargeImage } from 'src/app/models/LargeImage';

export interface Card {
  id: number;
  card_type: string;
  illustrator: string;
  rarity: string;
  item_def: string;
  cardNames: CardName[];
  largeImages: LargeImage[];
}
