import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscardedCard } from '../historial.component';


@Component({
  selector: 'app-historial-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial-item.component.html',
})
export class HistorialItemComponent {
  @Input() card!: DiscardedCard;

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('es-CO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
}