import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtratoBoxComponent } from '../extrato-box/extrato-box.component';

@Component({
  selector: 'app-extrato-transferencias',
  standalone: true,
  templateUrl: './extrato-transferencias.component.html',
  styleUrls: ['./extrato-transferencias.component.css'],
  imports: [CommonModule, ExtratoBoxComponent]
})
export class ExtratoTransferenciasComponent {

}
