import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TarjetaItemComponent } from './tarjeta-item/tarjeta-item.component';

export interface VirtualCard {
  id: string;
  alias: string;
  lastFourDigits: string;
  cvv: string;
  expiryDate: string;
  amount: number;
  frozen: boolean;
  showCvv: boolean;
  createdAt: Date;
  holder?: string;
}

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [CommonModule, RouterModule, TarjetaItemComponent],
  templateUrl: './tarjetas.component.html',
})
export class TarjetasComponent {
  cards: VirtualCard[] = [
    {
      id: '1',
      alias: 'Compras Online',
      lastFourDigits: '4231',
      cvv: '123',
      expiryDate: '12/25',
      amount: 1000000,
      frozen: false,
      showCvv: false,
      createdAt: new Date(),
      holder: 'JUAN PEREZ'
    },
    {
      id: '2',
      alias: 'Suscripciones',
      lastFourDigits: '7856',
      cvv: '456',
      expiryDate: '08/24',
      amount: 500000,
      frozen: true,
      showCvv: false,
      createdAt: new Date(),
      holder: 'JUAN PEREZ'
    }
  ];

  onCardDeleted(cardId: string): void {
    this.cards = this.cards.filter(c => c.id !== cardId);
  }

  onCardFrozen(cardId: string): void {
    const card = this.cards.find(c => c.id === cardId);
    if (card) {
      card.frozen = !card.frozen;
    }
  }

  formatMoney(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  }
}