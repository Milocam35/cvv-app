import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-nueva',
  templateUrl: './tarjeta-nueva.component.html'
})
export class TarjetaNuevaComponent {
  cardName: string = '';
  showSuccess: boolean = false;

  constructor(private router: Router) {}

  createCard() {
    if (!this.cardName || this.cardName.length < 3) return;

    // Aquí iría la lógica para crear la tarjeta en el backend
    // Por ahora simulamos la creación exitosa
    this.showSuccess = true;
  }

  navigateToCards() {
    this.router.navigate(['/tarjetas']);
  }

  // Generar un número de tarjeta aleatorio (simulación)
  private generateCardNumber(): string {
    let num = '';
    for (let i = 0; i < 16; i++) {
      num += Math.floor(Math.random() * 10);
      if ((i + 1) % 4 === 0 && i !== 15) num += ' ';
    }
    return num;
  }

  // Generar un CVV aleatorio (simulación)
  private generateCVV(): string {
    return Math.floor(100 + Math.random() * 900).toString();
  }
}