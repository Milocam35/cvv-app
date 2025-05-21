import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VirtualCard } from '../tarjetas/tarjetas.component';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-info',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CurrencyPipe, RouterModule],
  templateUrl: './tarjeta-info.component.html',
})
export class TarjetaInfoComponent implements OnInit {
  card: VirtualCard | undefined;
  showCvv = false;
  currentAmount = 0;
  operationType: 'add' | 'withdraw' = 'add';
  cardNumber = ''; // Variable para el número completo de tarjeta

  // Datos de ejemplo mejorados
  sampleCards: VirtualCard[] = [
    {
      id: '1',
      alias: 'Compras Online',
      lastFourDigits: '3456',
      cvv: '789', // CVV diferente como solicitaste
      expiryDate: '12/25',
      amount: 1000,
      frozen: false,
      showCvv: false,
      createdAt: new Date(),
      holder: 'JUAN PEREZ',
    },
    {
      id: '2',
      alias: 'Emergencias',
      lastFourDigits: '7788',
      cvv: '456',
      expiryDate: '06/24',
      amount: 500000,
      frozen: false,
      showCvv: false,
      createdAt: new Date(),
      holder: 'JUAN PEREZ',
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const cardId = this.route.snapshot.paramMap.get('id');
    this.card = this.sampleCards.find(c => c.id === cardId);
  }

  // Formatea el número de tarjeta en grupos de 4 dígitos
  private formatCardNumber(number: string): string {
    return number.replace(/(\d{4})(?=\d)/g, '$1 ');
  }

  toggleCvv(): void {
    this.showCvv = !this.showCvv;
    if (this.showCvv) {
      setTimeout(() => {
        this.showCvv = false;
      }, 5000);
    }
  }

  adjustAmount(amount: number): void {
    const newAmount = this.currentAmount + amount;
    this.currentAmount = Math.max(0, newAmount);
  }

  confirmOperation(): void {
    if (!this.card) return;

    if (this.operationType === 'add') {
      this.card.amount += this.currentAmount;
    } else {
      if (this.currentAmount > this.card.amount) {
        alert('No puedes retirar más de lo que tienes disponible');
        return;
      }
      this.card.amount -= this.currentAmount;
    }

    alert(`Operación exitosa! Nuevo saldo: ${this.card.amount}`);
  }
}