import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaBoxComponent } from './transferencia-box.component';

describe('TransferenciaBoxComponent', () => {
  let component: TransferenciaBoxComponent;
  let fixture: ComponentFixture<TransferenciaBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransferenciaBoxComponent]
    });
    fixture = TestBed.createComponent(TransferenciaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
