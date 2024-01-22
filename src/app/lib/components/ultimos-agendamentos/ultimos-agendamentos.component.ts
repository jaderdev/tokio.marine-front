import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { TokioMarineService } from '@lib/services/tokio-marine/tokio-marine.service';
import { Transferencia } from '@lib/models/itransferencia';
import { EventService } from '@lib/services/event/event.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-ultimos-agendamentos',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './ultimos-agendamentos.component.html',
  styleUrls: ['./ultimos-agendamentos.component.css']
})
export class UltimosAgendamentosComponent implements OnInit, OnDestroy{
	transferencias: Transferencia[] = [];
	private updateTransferencias: Subscription
	
	constructor(private service: TokioMarineService, private eventService: EventService){
		this.updateTransferencias = this.eventService.getUpdate().subscribe
             (message => {
				this.loadTransferencias();			
			 });
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

	ngOnDestroy() { // It's a good practice to unsubscribe to ensure no memory leaks
		this.updateTransferencias.unsubscribe();
	}

}
