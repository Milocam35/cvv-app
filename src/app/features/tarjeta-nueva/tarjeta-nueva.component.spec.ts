import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaNuevaComponent } from './tarjeta-nueva.component';

describe('TarjetaNuevaComponent', () => {
  let component: TarjetaNuevaComponent;
  let fixture: ComponentFixture<TarjetaNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaNuevaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
