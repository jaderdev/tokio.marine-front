import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoTransferenciasComponent } from './extrato-transferencias.component';

describe('ExtratoTransferenciasComponent', () => {
  let component: ExtratoTransferenciasComponent;
  let fixture: ComponentFixture<ExtratoTransferenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExtratoTransferenciasComponent]
    });
    fixture = TestBed.createComponent(ExtratoTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
