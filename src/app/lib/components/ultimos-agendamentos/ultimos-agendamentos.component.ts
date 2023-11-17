import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';

interface Country {
  dataAgendamento: string;
	name: string;
	flag: string;
	area: number;
	population: number;
  valor: string;
}

const COUNTRIES: Country[] = [
	{
    dataAgendamento: "11/10/2023",
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
    valor : "R$ 200,00"
	},
	{
    dataAgendamento: "11/10/2023",
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
    valor : "R$ 200,00"
	},
	{
    dataAgendamento: "11/10/2023",
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
    valor : "R$ 200,00"
	},
	{
    dataAgendamento: "11/10/2023",
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
    valor : "R$ 200,00"
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
  countries = COUNTRIES;
}
