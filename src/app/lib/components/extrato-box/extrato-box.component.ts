import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UltimosAgendamentosComponent } from '../ultimos-agendamentos/ultimos-agendamentos.component';

@Component({
  standalone: true,
  selector: 'app-extrato-box',
  templateUrl: './extrato-box.component.html',
  styleUrls: ['./extrato-box.component.css'],
  imports: [ NgbNavModule, UltimosAgendamentosComponent ]
})
export class ExtratoBoxComponent {
  ngOnInit() {
  }
}
