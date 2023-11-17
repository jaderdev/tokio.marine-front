import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoBoxComponent } from './extrato-box.component';

describe('ExtratoBoxComponent', () => {
  let component: ExtratoBoxComponent;
  let fixture: ComponentFixture<ExtratoBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtratoBoxComponent]
    });
    fixture = TestBed.createComponent(ExtratoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
