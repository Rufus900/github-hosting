import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private selectedSubject = new BehaviorSubject<string>('home');
  public selected$ = this.selectedSubject.asObservable();

  setSelected(value: string) {
    this.selectedSubject.next(value);
  }
}