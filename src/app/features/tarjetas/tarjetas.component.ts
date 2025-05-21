import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TarjetaItemComponent } from './tarjeta-item/tarjeta-item.component';
import { RouterModule } from '@angular/router';

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
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TarjetaItemComponent, RouterModule],
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

  showAddCardModal = false;
  cardForm: FormGroup;
  presetAmounts = [100000, 500000, 1000000];

  constructor(private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      alias: [''],
      amount: [null, [Validators.required, Validators.min(10000)]],
      validFor: ['3', Validators.required]
    });
  }

  openAddCardModal(): void {
    this.showAddCardModal = true;
  }

  closeAddCardModal(): void {
    this.showAddCardModal = false;
    this.cardForm.reset({
      validFor: '3'
    });
  }

  setAmount(amount: number): void {
    this.cardForm.patchValue({ amount });
  }

  onSubmit(): void {
    if (this.cardForm.valid) {
      const formValue = this.cardForm.value;
      
      const newCard: VirtualCard = {
        id: Math.random().toString(36).substring(2, 9),
        alias: formValue.alias,
        lastFourDigits: Math.floor(1000 + Math.random() * 9000).toString(),
        cvv: Math.floor(100 + Math.random() * 900).toString(),
        expiryDate: this.generateExpiryDate(formValue.validFor),
        amount: formValue.amount,
        frozen: false,
        showCvv: false,
        createdAt: new Date()
      };
      
      this.cards.unshift(newCard);
      this.closeAddCardModal();
    }
  }

  private generateExpiryDate(months: string): string {
    const date = new Date();
    date.setMonth(date.getMonth() + parseInt(months));
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${year}`;
  }

  formatMoney(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  }

  onCardDeleted(cardId: string): void {
    this.cards = this.cards.filter(c => c.id !== cardId);
  }

  onCardFrozen(cardId: string): void {
    const card = this.cards.find(c => c.id === cardId);
    if (card) {
      card.frozen = !card.frozen;
    }
  }
}