import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { NgbDatepickerModule,NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeft, heroChevronRight, heroCalendarDays } from '@ng-icons/heroicons/outline';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@Component({
  selector: 'app-transferencia-form',
  standalone: true,
  imports: [ 
    CommonModule,
    NgbDatepickerModule,
    FormsModule,
    NgIconComponent,
    ReactiveFormsModule,
    CurrencyMaskModule
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
  export class TransferenciaFormComponent {
    
    today = new Date();
    step: number;
    appliedTax: number = 0;
    taxValue: number = 0;
    
    model: NgbDateStruct = {  
      day: this.today.getUTCDate(), 
      month: this.today.getUTCMonth() + 1,
      year: this.today.getUTCFullYear()
    };
    
    minDate: NgbDateStruct = { 
      day: this.today.getUTCDate(),
      month: this.today.getUTCMonth() + 1,
      year: this.today.getUTCFullYear()
    };
    
    destAccountInput = new FormControl('00000...', 
    [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10),
      Validators.maxLength(10)
    ]);
    
    transfValueInput = new FormControl(0);
    
    constructor(private formBuilder: FormBuilder) {
      this.step = 1;
    }
    
    increaseStep = ()=>{ if(this.step < 4 ) this.step += 1; }
    decreaseStep = ()=>{ if(this.step > 1 ) this.step -= 1; }
    
    enviarTransacao(){
      console.table({
        "date": `${this.model.year}-${this.model.month}-${this.model.day}`,
        "destAccount":this.destAccountInput.value,
        "value": this.transfValueInput.value,
        "destAccount2" : this.destAccountInput.valid,
      })
    }
    
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
  }
  