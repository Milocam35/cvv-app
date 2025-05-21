import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoTarjetaComponent } from './aviso-tarjeta.component';

describe('AvisoTarjetaComponent', () => {
  let component: AvisoTarjetaComponent;
  let fixture: ComponentFixture<AvisoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisoTarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
