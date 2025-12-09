import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoReservacionVuelo } from './listado-reservacionvuelo';

describe('ListadoReservacionvuelo', () => {
  let component: ListadoReservacionVuelo;
  let fixture: ComponentFixture<ListadoReservacionVuelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoReservacionVuelo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoReservacionVuelo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
