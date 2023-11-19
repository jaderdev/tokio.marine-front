import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferenciaFormComponent } from '../transferencia-form/transferencia-form.component';

@Component({
  selector: 'app-transferencia-box',
  standalone: true,
  imports: [CommonModule, TransferenciaFormComponent],
  templateUrl: './transferencia-box.component.html',
  styleUrls: ['./transferencia-box.component.css']
})
export class TransferenciaBoxComponent {

}
