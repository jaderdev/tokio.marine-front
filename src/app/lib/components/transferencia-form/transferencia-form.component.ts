import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCalendar,
         NgbDate,
         NgbDatepickerModule,
         NgbDateStruct,
        } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroChevronLeft, heroChevronRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-transferencia-form',
  standalone: true,
  imports: [ CommonModule,
             NgbDatepickerModule,
             FormsModule,
             JsonPipe,
             NgIconComponent],
  templateUrl: './transferencia-form.component.html',
  styleUrls: ['./transferencia-form.component.css'],
  viewProviders: [provideIcons({ featherAirplay, heroChevronLeft, heroChevronRight })]
})
export class TransferenciaFormComponent {
  today = inject(NgbCalendar).getToday();

	model: NgbDateStruct = { year: 2023, month: 11, day: 17};
	date: { year: number; month: number } = { year: 2023, month: 11};
  step: number;
  calendar = inject(NgbCalendar);
  t = { currentMonth: 10, currentYear : 2023}; 

	hoveredDate: NgbDate | null = null;
	fromDate: NgbDate = this.calendar.getToday();
	toDate: NgbDate | null = this.calendar.getNext(this.fromDate, 'd', 10);

  constructor() {
    this.step = 1;
  }

  increaseStep = ()=>{ if(this.step < 4 ) this.step += 1; }
  decreaseStep = ()=>{ if(this.step > 1 ) this.step -= 1; }

	onDateSelection(date: NgbDate) {
    console.log(date)
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}
}
