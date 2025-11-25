import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente-service';

describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
