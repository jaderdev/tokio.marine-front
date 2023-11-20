import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaxasTransferencia } from '@lib/models/itaxas-transferencia';
import { Transferencia } from '@lib/models/itransferencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokioMarineService {
  
  constructor(  private http: HttpClient) { }
  
  private url = 'http://localhost:8080/api/';
  
  getTranferencias(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.url+"transferencias")
  }
  
  getTaxasTransferencia(): Observable<TaxasTransferencia[]>{
    return this.http.get<TaxasTransferencia[]>(this.url+"taxas/transferencia")
  }
  
  postTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    return this.http.post<Transferencia>(this.url+"transferencias", transferencia)
  }
}

