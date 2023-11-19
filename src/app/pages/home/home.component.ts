import { Component } from '@angular/core';
import { ExtratoTransferenciasComponent } from '../../lib/components/extrato-transferencias/extrato-transferencias.component'
import { TransferenciaBoxComponent } from '@lib/components/transferencia-box/transferencia-box.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ ExtratoTransferenciasComponent, TransferenciaBoxComponent ]
})
export class HomeComponent {

}
