import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoHotel } from './nuevo-hotel';

describe('NuevoHotel', () => {
  let component: NuevoHotel;
  let fixture: ComponentFixture<NuevoHotel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoHotel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoHotel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
