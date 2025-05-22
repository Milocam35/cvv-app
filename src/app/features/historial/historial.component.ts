import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HistorialItemComponent } from './historial-item/historial-item.component';

export interface DiscardedCard {
  id: string;
  alias: string;
  lastFourDigits: string;
  lastTransactionAmount: number;
  lastTransactionDate: Date;
  discardedDate: Date;
}

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, RouterModule, HistorialItemComponent],
  templateUrl: './historial.component.html',
})
export class HistorialComponent {
  discardedCards: DiscardedCard[] = [
    {
      id: '1',
      alias: 'Compras Online',
      lastFourDigits: '4231',
      lastTransactionAmount: 125000,
      lastTransactionDate: new Date(2023, 10, 15),
      discardedDate: new Date(2023, 10, 20)
    },
    {
      id: '2',
      alias: 'Suscripciones',
      lastFourDigits: '7856',
      lastTransactionAmount: 49900,
      lastTransactionDate: new Date(2023, 9, 28),
      discardedDate: new Date(2023, 10, 5)
    },
    {
      id: '3',
      alias: 'Viaje a Bogotá',
      lastFourDigits: '9012',
      lastTransactionAmount: 320000,
      lastTransactionDate: new Date(2023, 8, 12),
      discardedDate: new Date(2023, 9, 1)
    },
    {
      id: '4',
      alias: 'Regalos Navidad',
      lastFourDigits: '3456',
      lastTransactionAmount: 280000,
      lastTransactionDate: new Date(2023, 7, 25),
      discardedDate: new Date(2023, 8, 10)
    },
    {
      id: '5',
      alias: 'Compras Amazon',
      lastFourDigits: '6789',
      lastTransactionAmount: 175000,
      lastTransactionDate: new Date(2023, 6, 18),
      discardedDate: new Date(2023, 7, 5)
    }
  ];

  constructor() { }
}