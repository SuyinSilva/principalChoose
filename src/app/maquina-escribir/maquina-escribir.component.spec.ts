import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaEscribirComponent } from './maquina-escribir.component';

describe('MaquinaEscribirComponent', () => {
  let component: MaquinaEscribirComponent;
  let fixture: ComponentFixture<MaquinaEscribirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaquinaEscribirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquinaEscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
