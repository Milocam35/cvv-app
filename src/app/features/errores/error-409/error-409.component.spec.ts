import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error409Component } from './error-409.component';

describe('Error409Component', () => {
  let component: Error409Component;
  let fixture: ComponentFixture<Error409Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error409Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
