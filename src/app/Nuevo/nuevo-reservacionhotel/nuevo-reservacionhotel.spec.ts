import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoReservacionHotel } from './nuevo-reservacionhotel';

describe('NuevoReservacionHotel', () => {
  let component: NuevoReservacionHotel;
  let fixture: ComponentFixture<NuevoReservacionHotel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoReservacionHotel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoReservacionHotel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
