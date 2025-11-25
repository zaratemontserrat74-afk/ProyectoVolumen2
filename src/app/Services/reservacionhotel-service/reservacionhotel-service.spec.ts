import { TestBed } from '@angular/core/testing';
import { ReservacionHotelService } from './reservacionhotel-service';

describe('ReservacionHotelService', () => {
  let service: ReservacionHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ReservacionHotelService)
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
