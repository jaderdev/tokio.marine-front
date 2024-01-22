import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  private updateTransferencias = new Subject<any>();
    
  sendUpdate(message: string) {
      this.updateTransferencias.next({ text: message }); 
  }

  getUpdate(): Observable<any> {
      return this.updateTransferencias.asObservable();
  }
}
