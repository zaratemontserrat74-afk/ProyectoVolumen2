import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVuelo } from './nuevo-vuelo';

describe('NuevoVuelo', () => {
  let component: NuevoVuelo;
  let fixture: ComponentFixture<NuevoVuelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoVuelo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoVuelo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
