import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';

interface Transferencias {
  	dataAgendamento: string;
	contaOrigem: string;
	contaDestino: string;
  	valor: string;
	taxa: string;
	dataTransferencia: string;
}

const COUNTRIES: Transferencias[] = [
	{
    dataAgendamento: "11/10/2023",
		contaOrigem: '0000001231',
		contaDestino: '0012921001',
    	valor : "R$ 200,00",
		taxa : '10%',
		dataTransferencia: '16/11/2023'
	},
	{
    dataAgendamento: "11/10/2023",
		contaOrigem: '0000001231',
		contaDestino: '0012921001',
    	valor : "R$ 200,00",
		taxa : '10%',
		dataTransferencia: '16/11/2023'
	},
	{
    dataAgendamento: "11/10/2023",
		contaOrigem: '0000001231',
		contaDestino: '0012921001',
    	valor : "R$ 200,00",
		taxa : '10%',
		dataTransferencia: '16/11/2023'
	},
	{
    dataAgendamento: "11/10/2023",
		contaOrigem: '0000001231',
		contaDestino: '0012921001',
    	valor : "R$ 200,00",
		taxa : '10%',
		dataTransferencia: '16/11/2023'
	},
];

@Component({
  selector: 'app-ultimos-agendamentos',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './ultimos-agendamentos.component.html',
  styleUrls: ['./ultimos-agendamentos.component.css']
})
export class UltimosAgendamentosComponent {
  transferencias = [...COUNTRIES, ...COUNTRIES, ...COUNTRIES].slice(1,10);
}
