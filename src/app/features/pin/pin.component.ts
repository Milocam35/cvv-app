import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  imports: [CommonModule]
})
export class PinComponent {
  @ViewChild('pin1') pin1!: ElementRef;
  @ViewChild('pin2') pin2!: ElementRef;
  @ViewChild('pin3') pin3!: ElementRef;
  @ViewChild('pin4') pin4!: ElementRef;

  constructor(private router: Router) {}

  showError = false;
  correctPin = '1234'; // PIN correcto de ejemplo

  moveFocus(currentInput: HTMLInputElement, nextInput: HTMLInputElement) {
    if (currentInput.value.length === 1) {
      nextInput.focus();
    }
  }

  onLastPinInput(lastInput: HTMLInputElement) {
    if (lastInput.value.length === 1) {
      this.validatePin();
    }
  }

  validatePin() {
    const enteredPin = 
      this.pin1.nativeElement.value + 
      this.pin2.nativeElement.value + 
      this.pin3.nativeElement.value + 
      this.pin4.nativeElement.value;

    if (enteredPin === this.correctPin) {
      // PIN correcto - aquí iría la lógica para continuar
      this.router.navigate(['/aviso-tarjeta']);
    } else {
      // PIN incorrecto - mostrar popup de error
      this.showError = true;
      // Limpiar los campos
      this.clearInputs();
    }
  }

  clearInputs() {
    this.pin1.nativeElement.value = '';
    this.pin2.nativeElement.value = '';
    this.pin3.nativeElement.value = '';
    this.pin4.nativeElement.value = '';
    this.pin1.nativeElement.focus();
  }
}