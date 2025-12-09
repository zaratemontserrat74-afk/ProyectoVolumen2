import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoVuelo } from './listado-vuelo';

describe('ListadoVuelo', () => {
  let component: ListadoVuelo;
  let fixture: ComponentFixture<ListadoVuelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoVuelo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoVuelo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
