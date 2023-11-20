import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { NgbDatepickerModule,NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeft, heroChevronRight, heroCalendarDays } from '@ng-icons/heroicons/outline';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { TokioMarineService } from '@lib/services/tokio-marine/tokio-marine.service';
import { Transferencia } from '@lib/models/itransferencia';
import { NgFor } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { TaxasTransferencia } from '@lib/models/itaxas-transferencia';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [
	
];

@Component({
  selector: 'app-transferencia-form',
  standalone: true,
  imports: [ 
    CommonModule,
    NgbDatepickerModule,
    FormsModule,
    NgIconComponent,
    ReactiveFormsModule,
    CurrencyMaskModule,
    NgFor,
    NgbAlertModule
  ],
  templateUrl: './transferencia-form.component.html',
  styleUrls: ['./transferencia-form.component.css'],
  viewProviders: [
    provideIcons({ 
      heroChevronLeft,
      heroChevronRight,
      heroCalendarDays
    })]
  })
  export class TransferenciaFormComponent implements OnInit{
    
    alerts: Alert[]= [];
    step: number;
    appliedTax: number = 0;
    taxValue: number = 0;
    
    model: NgbDateStruct;
    minDate: NgbDateStruct;
    maxDate: NgbDateStruct;

    destAccountInput = new FormControl('', 
    [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10),
      Validators.maxLength(10)
    ]);
    
    transfValueInput = new FormControl(0,[
      Validators.required,
      Validators.min(2)
    ]);
    taxasTransferencia: TaxasTransferencia[] = [];
    
    constructor(
      private formBuilder: FormBuilder,
      private service: TokioMarineService
      ) {
      this.step = 1;
      this.reset();

      let today = new Date();
      this.model = {  
        day: today.getUTCDate(), 
        month: today.getUTCMonth() + 1,
        year: today.getUTCFullYear()
      };

      this.minDate = this.model;
      
      today.setDate(today.getDate() + 49)
      this.maxDate = {  
        day: today.getUTCDate(), 
        month: today.getUTCMonth() + 1,
        year: today.getUTCFullYear()
      };
    }
  
    ngOnInit(): void {
      this.service.getTaxasTransferencia().subscribe({
        next: (result)=>{
          this.taxasTransferencia = result;
        }
      })
    }
    
    increaseStep = ()=>{ 
      if(this.step > 4 ) {
        return false;
      }
      switch(this.step){
        case 2:
          if(!this.destAccountInput.valid){
            this.addAlert("Por favor insira a conta de destino corretamente com 10 dígitos","danger");
            return false;
          }
        break;
        case 3:
          if(!this.transfValueInput.valid){
            this.addAlert("Por favor insira um valor para a transferência.","danger");
            return false;
          }
        break;
      }
      
      return this.step += 1;
    }
    decreaseStep = ()=>{ if(this.step > 1 ) this.step -= 1; }
    
    getDateFromNgbDateStruct(d: NgbDateStruct){ return new Date(d.year,d.month-1,d.day); }
    
    intervaloDeDatasEmDias(){
      const miliseconds: number = 1000;
      const secondsInAHour: number = 3600;
      const hoursInADay: number = 24;
      
      const final: Date = new Date(this.model.year,this.model.month,this.model.day);
      const initial: Date = new Date(this.minDate.year,this.minDate.month,this.minDate.day);
      const milisecondsDiff: number = final.getTime() - initial.getTime();
      
      return milisecondsDiff / (miliseconds * secondsInAHour * hoursInADay);
    }
    
    verifyAccount(event: any){
      return event.value = event.value.replaceAll(/[^0-9]/g,'').slice(0,10);
    }

    enviarTransacao(){
      let transferencia: Transferencia = {
        agendada: true, 
        contaDestino: String(this.destAccountInput.value),
        dataCriacao: new Date().toISOString().split("T")[0],
        dataTransferencia: this.getDateFromNgbDateStruct(this.model).toISOString().split("T")[0],
        valor: String(this.transfValueInput.value),
      }

      this.service.postTransferencia(transferencia).subscribe({
        next: (result: any)=>{
          this.addAlert("Transferência salva com sucesso","success")
        },
        error: (result)=>{
          console.log(result)
          for(let r in result.error){
            let alert = this.addAlert(`${r}: ${result.error[r]}`,"danger")
            setTimeout(()=>{
              this.close(alert);          
            },5000)
          }
      }})
    }
  
    addAlert(message: string, type: string){
      let alert: Alert = { type: type, message: message};
      this.alerts.push(alert)
      setTimeout(()=>{
        this.close(alert)
      },5000)
      return alert;
    }
    
    close(alert: Alert) {
      this.alerts.splice(this.alerts.indexOf(alert),1);
    }
 
    reset() {
      this.alerts = Array.from(ALERTS);
    }

    parseTaxFromPercentage(tax: string | undefined){
      let percent: string = String(Number(tax) * 100);
      return percent.substring(0,percent.indexOf(".")+2);
    }
  }
  