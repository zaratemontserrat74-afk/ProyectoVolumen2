import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoReservacionVuelo } from './nuevo-reservacionvuelo';

describe('NuevoReservacionVuelo', () => {
  let component: NuevoReservacionVuelo;
  let fixture: ComponentFixture<NuevoReservacionVuelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoReservacionVuelo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoReservacionVuelo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
