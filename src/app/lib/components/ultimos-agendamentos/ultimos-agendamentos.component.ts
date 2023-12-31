import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { TokioMarineService } from '@lib/services/tokio-marine/tokio-marine.service';
import { Transferencia } from '@lib/models/itransferencia';


@Component({
  selector: 'app-ultimos-agendamentos',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './ultimos-agendamentos.component.html',
  styleUrls: ['./ultimos-agendamentos.component.css']
})
export class UltimosAgendamentosComponent implements OnInit{
	transferencias: Transferencia[] = [];
	
	constructor(private service: TokioMarineService){
		
	}
	
	ngOnInit(): void {
		this.loadTransferencias()	
	}

	loadTransferencias(){
		this.service.getTranferencias().subscribe((result)=>{
			this.transferencias = result;
		})
	}

	parseTaxFromPercentage(tax: string | undefined){
		let percent: string = String(Number(tax) * 100);
		return percent.substring(0,percent.indexOf(".")+2);
	}

}
