import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoHotel } from './listado-hotel';

describe('ListadoHotel', () => {
  let component: ListadoHotel;
  let fixture: ComponentFixture<ListadoHotel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoHotel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoHotel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
