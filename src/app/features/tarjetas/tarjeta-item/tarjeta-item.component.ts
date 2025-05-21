import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VirtualCard } from '../tarjetas.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-item.component.html',
})
export class TarjetaItemComponent {
  @Input() card!: VirtualCard;
  @Output() delete = new EventEmitter<string>();
  @Output() freeze = new EventEmitter<string>();

  toggleCvv(): void {
    this.card.showCvv = !this.card.showCvv;
    if (this.card.showCvv) {
      setTimeout(() => {
        this.card.showCvv = false;
      }, 5000);
    }
  }

  onDelete(): void {
    if (confirm(`¿Estás seguro de que quieres eliminar la tarjeta ${this.card.alias || 'sin nombre'}?`)) {
      this.delete.emit(this.card.id);
    }
  }

  onFreeze(): void {
    this.freeze.emit(this.card.id);
  }
}