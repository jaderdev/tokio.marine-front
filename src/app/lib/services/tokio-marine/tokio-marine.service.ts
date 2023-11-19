import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '@lib/models/itransferencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokioMarineService {

  constructor(  private http: HttpClient) { }

  private url = 'http://localhost:8080/api/transferencias';

  getTranferencias(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.url)
  }
}
