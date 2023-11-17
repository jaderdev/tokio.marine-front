import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosAgendamentosComponent } from './ultimos-agendamentos.component';

describe('UltimosAgendamentosComponent', () => {
  let component: UltimosAgendamentosComponent;
  let fixture: ComponentFixture<UltimosAgendamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UltimosAgendamentosComponent]
    });
    fixture = TestBed.createComponent(UltimosAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
