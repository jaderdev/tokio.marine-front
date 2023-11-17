import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UltimosLancamentosComponent } from '../ultimos-lancamentos/ultimos-lancamentos.component';

@Component({
  standalone: true,
  selector: 'app-extrato-box',
  templateUrl: './extrato-box.component.html',
  styleUrls: ['./extrato-box.component.css'],
  imports: [ NgbNavModule, UltimosLancamentosComponent ]
})
export class ExtratoBoxComponent {
  ngOnInit() {
  }
}
