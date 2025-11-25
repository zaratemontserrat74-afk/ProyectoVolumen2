import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoReservacionHotel } from './listado-reservacionhotel';

describe('ListadoReservacionHotel', () => {
  let component: ListadoReservacionHotel;
  let fixture: ComponentFixture<ListadoReservacionHotel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoReservacionHotel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoReservacionHotel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
