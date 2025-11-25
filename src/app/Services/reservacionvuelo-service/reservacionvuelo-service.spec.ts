import { TestBed } from '@angular/core/testing';
import { ReservacionVueloService } from './reservacionvuelo-service';

describe('ReservacionVueloService', () => {
  let service: ReservacionVueloService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ReservacionVueloService)
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
