import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-403',
  templateUrl: './error-403.component.html',
})
export class Error403Component {
  constructor(private router: Router) {}

  unfreezeCard() {
    // Lógica para activar la tarjeta
    // Luego redirigir
    this.router.navigate(['/tarjetas']);
  }
}